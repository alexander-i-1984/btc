import showBlogs from './components/showBlogs.vue';
import chart0 from './components/chart0.vue';
import chart1 from './components/chart1.vue';
import chart2 from './components/chart2.vue';

export default [
    {path:'/', component:showBlogs},
    {path:'/chart0', component:chart0},
    {path:'/chart1', component:chart1},
    {path:'/chart2', component:chart2}
]