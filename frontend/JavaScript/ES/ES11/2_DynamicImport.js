const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click', () => {
    import('./ajax').then(mod => {
        // console.log(mod)
        mod.default('static/a.json', res => {
            console.log(res)
        })
    })
})

// Vue router
// Lazy Loading Routes
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
    routes: [{ path: '/foo', component: Foo }]
})
