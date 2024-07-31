import { Knex } from "knex";
import { categoryData, userData, fileData } from '../import'

export async function seed(knex: Knex) {
    const txn = await knex.transaction();

    try {
        // Deletes ALL existing entries
        await txn("file").del();
        await txn("users").del();
        await txn("category").del();
    
        // Inserts seed entries
        await txn.insert(userData).into("users");
    
        await txn.insert(categoryData).into("category");
    
        
        for (let i=0; i<fileData.length; i++) {
            if (fileData[i].owner === "gordan") {
                fileData[i].owner = "gordon"
            } else if (fileData[i].owner === "alexs"|| fileData[i].owner === "ales" ) {
                fileData[i].owner = "alex"
            } else if (fileData[i].owner === "admiin") {
                fileData[i].owner = "admin"
            } else if (fileData[i].owner === "micheal") {
                fileData[i].owner = "michael"
            }
            const userId = await txn.select("id").from("users").where("username",fileData[i].owner)
            const categoryId = await txn.select("id").from("category").where("name",fileData[i].category)
            if(fileData[i].is_file === 0) {
                fileData[i].is_file = false
            } else {
                fileData[i].is_file = true
            }
            console.log(fileData[i].owner,fileData[i].category,categoryId,userId)
            await txn.insert([{
                name: fileData[i].name,
                content: fileData[i].Content,
                is_file: fileData[i].is_file,
                category_id: categoryId[0].id,
                user_id: userId[0].id
            }]).into("file");
        }
        await txn.commit();
        console.log("done")
        return
    } catch (e) {
        await txn.rollback();
        console.log(e)
        return
    }
};
