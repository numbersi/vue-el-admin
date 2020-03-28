import request from '@/plugins/axios'

function getSpecList(data) {
  return request({
    url: '/api/shop/spec',
    method: 'get',
    data,
  })
}

export { getSpecList }
