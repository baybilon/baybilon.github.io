import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {title: string, icon: React.ReactNode, position: string, className: string,handleClick?: () => void; otherClasses?: string;}) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d5f3f8_0%,#7bd4e5_50%,#30B2CF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-neutral-900 bg-neutral-300 px-7 py-1 text-sm font-medium backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton