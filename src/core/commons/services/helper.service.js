import React from "react";
import { Link, Route } from "react-router-dom";
import { saveAs } from 'file-saver';


const getRouteList = (routes, isSideBar = false) => {
    let links = [];
    for (const key in routes) {
        if (routes.hasOwnProperty(key)) {
            const route = routes[key];
            route.map((x) => {
                if (isSideBar == true) {
                    if (x.isSideBar) {
                        links.push(x);
                    }
                } else {
                    links.push(x);
                }
            });
        }
    }

    return links;
};

export const createSideBarRouterLink = (routes) => {
    const routeList = getRouteList(routes, true);
    const reactLinks = routeList.map((x, i) => (
        <Link
            key={i}
            className="list-group-item list-group-item-action"
            to={x.path}
        >
            {x.label}
        </Link>
    ));
    return reactLinks;
};

export const createSwitchRoutes = (routes) => {
    const routeList = getRouteList(routes, false);
    const switchRoutes = routeList.map(({ path, component: C, exact }, i) => {
        // console.log("{path,component:C, exact}", { path, component: C, exact });
        return (
            <Route
                key={i}
                path={path}
                exact={exact}
                render={(props) => <C {...props} />}
            />
        );

        // return <Route key={i} path={path} component={C} />
    });
    // console.log(switchRoutes);

    return switchRoutes;
};

export const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}


export const handleSentenceCase = (dataKey) => {

    return dataKey.split("_").map(x => capitalizeText(x)).join(" ")
}



export const serviceResponse = function (success = false, data = null, msg = "") {

    return { success, msg, data }
}

export const failedHttpResponse = function (data = null, msg = "") {

    return serviceResponse(false, data, msg)
}

export const successHttpResponse = function (data = null, msg = "") {

    return serviceResponse(true, data, msg)
}


export const getAvgOfNumArray = (arr) => {
    const total = arr.reduce((a, b) => a + b, 0)
    const average = total / arr.length
    return isFinite(average) ? average : 0
}


export const removeObjectDuplicates = (arr, key) => {
    const x = arr.reduce((acc, current) => {
        const x = acc.find(item => item[key] === current[key]);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    return x;
}
export const timeout = ms => new Promise(res => setTimeout(res, ms))

export const cloneObject = (items) => JSON.parse(JSON.stringify(items))


export const exportFile = async (content, name, type) => {


    const mimeTypesMap = {
        png: 'image/png',
        gif: 'image/gif',
        jpg: 'image/jpg',
        jpeg: 'image/jpeg',
        pdf: 'application/pdf',
        mp4: 'video/mp4',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ppt: 'application/vnd.ms-powerpoint',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        text: "text/plain;charset=utf-8",
        csv: "text/csv",
    }

    const typeMime = mimeTypesMap[type] ? mimeTypesMap[type] : mimeTypesMap["text"]
    const blob = new Blob([content], { type: typeMime })

    saveAs(blob, name)

}

export default {
    getAvgOfNumArray,
    createSideBarRouterLink,
    createSwitchRoutes,
    serviceResponse,
    failedHttpResponse,
    successHttpResponse,
    handleSentenceCase,
    capitalizeText,
    removeObjectDuplicates,
    timeout,
    cloneObject,
    exportFile
};
