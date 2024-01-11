import { InputHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


const Color = {
    error: 'border border-red-500 shadow-[0px_0px_5px_0px_#FEB2B2] ',
    success: 'border border-green-500 shadow-[0px_0px_5px_0px_#c6f6d5]',
    none: 'border-2 shadow-[0px_0px_5px_0px_#E2E8F0]'
}

type InputMountedProps = {
    state?: 'error' | 'success' | 'none'
    text: string
    inputId?: string,
    icon?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ text = '', state = 'none', inputId, icon, className, ...props }: InputMountedProps) => {
    const colorInputAction = Color[state]
    return (
        <>
            <div className="flex flex-col m-2 w-auto rounded-lg">
                <label htmlFor={inputId} className="text-sm font-bold text-stone-500 ">{text}</label>
                <div className={twMerge("flex items-center text-xs p-1 rounded-lg ", className, colorInputAction)}>
                    <input
                        id={inputId}
                        {...props}
                        className='outline-none flex-1 pl-1'
                    />
                    {icon}
                </div>
            </div>
        </>
    )
}