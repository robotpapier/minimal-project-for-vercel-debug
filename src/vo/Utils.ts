
class Utils{
    clone<T>(el:T):T {
        return JSON.parse(JSON.stringify(el))
    }

    public registerAllComponents(Vue:any){

        const requireComponents = [
            require.context('@/components', true),
            require.context('@/views', true),
        ]

        requireComponents.forEach(requireComponent=>
            requireComponent.keys().forEach(fileName => {
                const componentConfig = requireComponent(fileName)
                const componentName = (fileName.split('/').pop() || "").replace(/\.\w+$/, '')
                Vue.component(
                    componentName,
                    componentConfig.default || componentConfig
                )
            })
        )

    }
    
}

export default new Utils();