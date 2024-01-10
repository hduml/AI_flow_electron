/*
 * @Author: Reny
 * @Date: 2023-12-27 12:28:28
 * @LastEditors: Solitario119 1412385393@qq.com
 * @LastEditTime: 2023-12-27 12:29:50
 * @FilePath: \electron-template\src\main\services\log.ts
 * @Description:
 */
import chalk from 'chalk'
import log from 'electron-log/main'
import path from 'path'
import { maxDepth, toJSON } from 'electron-log/src/main/transforms/object'

chalk.level = 3

export async function initLogs() {
  const color = {
    error: chalk.bgRed.white.bold,
    warn: chalk.yellow.bold,
    info: chalk.blue.bold,
    verbose: chalk.cyan,
    debug: chalk.green,
    silly: chalk.magenta
  }

  log.transports.file.resolvePathFn = () => path.join(global.logHome, 'debug.log')
  log.transports.file.level = global.logLevel

  // Change the console output to just the text we create in our hook.
  log.transports.console.format = '{text}'

  log.hooks.push((message, transport) => {
    let text: string | null = null

    if (transport !== log.transports.console) {
      return message
    }

    // Clone message and data because they are shared by the different
    // transports.
    const newMessage = Object.assign({}, message)
    const { data, date, level } = newMessage
    const dataClone = [...data]

    if (typeof dataClone[0] === 'string') {
      text = dataClone[0]
    } else {
      // Deal with objects, arrays etc.
      // Step 1: Ensure the object is not deeper the 6 levels.
      let safeObj = maxDepth({ data: dataClone[0] })

      // Step 2: This 'toJSON' method actually removes cyclic references so that
      // JSON.stringify() can safely handle them.
      safeObj = toJSON({ data: safeObj })

      // Step 3: JSON.stringify() the safe object
      text = JSON.stringify(toJSON({ data: safeObj }))
    }

    // Personal tweak to highlight messages starting with 'XXXXX'
    if (text.startsWith('XXXXX')) {
      text = chalk.bold(text)
    }

    // Build strings ready for output
    const colorize = color[level]
    const lvl = ('[' + level + ']').padStart(9, ' ')
    const formattedTime = date.toTimeString().substring(0, 8)

    // Tag entries with their process type:
    //   - M: main
    //   - R: renderer
    // const processType = newMessage.variables.processType === 'main' ? 'M' : 'R'
    const processType =
      newMessage && newMessage.variables && newMessage.variables.processType === 'main' ? 'M' : 'R'

    // Colorize the beginning of the output
    const prefix = colorize(`[${formattedTime}] [${processType}] ${lvl}`)

    // Add the final string back to the clone of the data array and save it to
    // newMessage.data
    dataClone[0] = `${prefix} ${text}`
    newMessage.data = dataClone

    // Return the newly constructed message
    return newMessage
  })

  log.initialize({ preload: true })

  Object.assign(console, log.functions)
}
