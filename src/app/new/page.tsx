import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo( data: FormData ) {
    "use server"

    // declare title var
    const title = data.get('title')?.valueOf()

    // verified typeOf
    if(typeof title !== "string" || title.length === 0) 
        throw new Error("Invalid Title...")

    await prisma.todo.create({
        data: {
            title: title,
            complete: false
        }
    })

    console.log('Hello')
    console.log(data)
    redirect('/')
}

export default function Page (){
    return (
        <>
                    
            <header className="flex justify-between items-center pb-8">
                <h1 className="text-2xl text-slate-800">Todo List</h1>
                <Link 
                className="text-black px-4 py-1 bg-white
                    rounded hover:bg-slate-200 focus-within:bg-slate-200 outline"
                href="/new"
                >
                New
                </Link>
            </header>

            <form action={createTodo} className="flex gap-2 flex-col">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Tape title"
                    className="border border-slate-500 bg-transparent rounded px-2 
                        py-1 outline-none focus-within:border-slate-100"
                />

                <div className="flex items-center gap-4 justify-end">
                    <Link href=".."
                        className="border border-slate-100 bg-red-900 text-slate-100 rounded px-2 
                            py-1 outline-none focus-within:border-slate-100"
                    >Cancel</Link>
                    <button type="submit" 
                        className="border border-slate-100 bg-slate-500 text-slate-100 rounded px-2 
                            py-1 outline-none focus-within:border-slate-100"
                    >Submit</button>
                </div>
            </form>

        </>
    )
}