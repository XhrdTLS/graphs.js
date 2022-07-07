import Grafos from './Graph'

const route = new Grafos();

route.addNode('A', {B:1})
route.addNode('B', { A:1, C:2, D: 4 })
route.addNode('C', { B:2, D:1 })
route.addNode('D', { C:1, B:4 })

console.log(route.path('A', 'D'))
//console.log("??")