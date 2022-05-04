import {getGenerations, getTypes} from "./fetch";

async function getGenerationNames(){
    return (await getGenerations()).results.map(type => {
        return type.name
    })
}

async function getTypeNames(){
    return (await getTypes()).results.map(type => {
        return type.name
    });
}


export {getGenerationNames, getTypeNames}
