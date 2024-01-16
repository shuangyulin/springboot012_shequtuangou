const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2c1hu/",
            name: "springboot2c1hu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2c1hu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区团购系统"
        } 
    }
}
export default base
