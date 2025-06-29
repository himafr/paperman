function HeadingComponent({text}:{text:string}) {
    return (
      <div className="h4 flex items-center gap-1.5 mb-4">
                <div className="bg-primary w-1 h-2 rounded-xl "></div>
          {text}</div>
    )
}

export default HeadingComponent
