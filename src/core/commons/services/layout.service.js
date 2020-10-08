
    const handleMobileHeader  = (width) =>{
        const bodyClassList = ["mobile-mode"];
        const invokerClassList = ["d-none"];
        // const 

        const body = document.querySelector("body")
        const sideBar = document.querySelector("#sidebar")
        const menuBtn =  document.querySelector("#mobile-menu-invoker")

        if(width <= 557){
            body.classList.add(...bodyClassList)
            menuBtn.classList.remove(...invokerClassList)
            // setOpenMenu(false)
        }else{
            body.classList.remove(...bodyClassList , "side-nav-on-action")
            menuBtn.classList.add(...invokerClassList)
        }

    }

    const handleMobileMenu  = (isMenuOpen) =>{
        const bodyClassList = ["side-nav-on-action"];
        const sidebarClassList = ["toggled" ,"action" ,"mini"];

        const body = document.querySelector("body")
        const sideBar = document.querySelector("#sidebar")
        const menuBtn =  document.querySelector("#mobile-menu-invoker")

        if(isMenuOpen){
            body.classList.add(...bodyClassList)
            sideBar.classList.add(...sidebarClassList)
        }else{
            body.classList.remove(...bodyClassList)
            sideBar.classList.remove(...sidebarClassList)
        }

    }


    const layoutService = {
        handleMobileHeader,
        handleMobileMenu
    }

    export default layoutService