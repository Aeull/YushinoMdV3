import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `*ArullBotz Disini(｡>_<｡)*`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.send3ButtonDoc(m.chat, info, wm, 'Hallo Bot', 'bilek', 'Menu', '.menu', '\nI LOVE YOU ARULL', 'bilek', m)
await conn.sendMessage(m.chat, {
      react: {
       text: '👋',
       key: m.key,
       }})

}

handler.customPrefix = /^(tes|bot|test)$/i

handler.command = new RegExp



export default handler