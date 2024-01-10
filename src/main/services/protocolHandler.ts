/*
 * @Author: Reny
 * @Date: 2023-11-13 10:05:03
 * @LastEditors: Solitario119 1412385393@qq.com
 * @LastEditTime: 2023-11-13 10:07:14
 * @FilePath: \PDK_Maker_v1\src\main\services\protocolHandler.ts
 * @Description:
 */
import { protocol, net } from 'electron'
import * as path from 'path'

export function registerCustomProtocols() {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'image',
      privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true }
    }
  ])
}

export function handleImageProtocol(request) {
  const normURI = path.normalize(decodeURI(request.url).slice('image://'.length))
  const url = `file://${normURI[0]}:${normURI.slice(1, normURI.length)}`
  return net.fetch(url)
}
