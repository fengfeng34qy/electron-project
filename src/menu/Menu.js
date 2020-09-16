export default [
  {
    label: '编辑',
    submenu: [
      {
        label: '重新加载',
        accelerator: 'CmdOrCtrl+Z',
        // role: 'undo',
        click: function (item, focusedWindow) {
          focusedWindow.reload()
        }
      }
    ]
  }
]
