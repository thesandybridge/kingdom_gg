import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

/**
* Connect to database
*/
const db = createClient(
    supabaseUrl,
    supabaseKey
)

/**
* Fetch all rows from the database
*/
const getRows = async (table: string) => {
    let { data, error } = await db
        .from(table)
        .select('*')
    return { data, error }
}

/**
* Fetch a row by its ID
*/
const getRowById = async (table: string, id: number) => {
    let { data: data, error } = await db
        .from(table)
        .select()
        .eq('id', id)
        .single()
    return { data, error }
}

/**
* Insert a row to the database
*/
const insertRow = async (table: string, payload: any) => {
    let { data, error } = await db
        .from(table)
        .insert(payload)
    return { data, error }
}

/**
* Update a row in the database
*/
const updateRow = async (table: string, id: number, payload: any) => {
    let { data, error } = await db
        .from(table)
        .update(payload)
        .eq('id', id)
    return { data, error }
}

/**
* Remove a row from the database
*/
const deleteRow = async (table: string, id: number) => {
    let { data, error } = await db
        .from(table)
        .delete()
        .eq('id', id)
    return { data, error }
}

export { getRows, getRowById, insertRow, updateRow, deleteRow }
