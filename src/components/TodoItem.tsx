"use client"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
    return <>
        <li key={id} className="flex gap-1 items-center">
            <input 
                type="checkbox" 
                className="cursor-pointer peer" 
                id={id} 
                defaultChecked={complete}
                onChange={ e => toggleTodo(id, e.target.checked) }
            />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through 
                peer-checked:text-slate-600 text-slate-900">
                {title}
            </label>
        </li>
    </>
} 