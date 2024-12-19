import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

function createTodo () {
  prisma.todo.create({ data: { title: "test", complete: false } });
}

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ 
    where: {id}, 
    data: {
      complete
    }
  })

}

export default async function Home() {

  // await createTodo()


  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center pb-8">
        <h1 className="text-2xl text-slate-900">Todo List</h1>
        <Link 
          className="text-black px-4 py-1 bg-white
            rounded hover:bg-slate-200 focus-within:bg-slate-200 outline"
          href="/new"
        >
          New
        </Link>
      </header>

      <ul>
        { todos.map( 
          todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ) 
        )}
      </ul>
    </>
  );
}
