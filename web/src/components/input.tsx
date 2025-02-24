import { ComponentProps } from "react";

// Composition pattern it is scalable and reusable
interface InputRootProps extends ComponentProps<'div'> {
    error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
    return(
    <div 
        data-error={error}
        className='group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-200 data-[error=true]:border-danger'
        {...props}
    />
    )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
    return(
        <span
            className='group-focus-within:text-gray-200 text-gray-400 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger'
            {...props}
        />
    )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
    return(
        <input 
            className="flex-1 outline-none placeholder-gray-400"
            {...props}
        />
    )
}