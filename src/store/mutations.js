// 这个文件是用来修改原始数据的
// 同步修改状态（state）
// mutation n 变化、转变

import * as types from './mutation-types'

const matutaions = {
  [types.SET_PROJECT] (state, project) {
    state.project = project
  }
}

export default matutaions
