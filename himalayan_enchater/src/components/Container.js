export default function Container({children,className}){
    return (
        <div className={`px-2 md:px-6 lg:px-20 xl:px-32 ${className}`}>
            {children}
        </div>
    )
}