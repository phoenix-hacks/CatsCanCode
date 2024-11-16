import React from "react";

const Track = () => {
  return (
    <div className="size-full text-white bg-bgBlack flex flex-col p-4">
      <h1 className="text-4xl font-medium">Summary - OOPS Lab 2024</h1>

      <div className="flex size-fit p-4 mt-4  border-2 rounded-lg border-stroke/25">
        <Column title={"Name"}>
          {Array.from({length: 10}, (_, i) => (
            <Item key={i}>Name {i}</Item>
          ))}
        </Column>
        <Column title={"Score"}></Column>
        <Column title={"Errors"}></Column>
        
      </div>
    </div>
  );
};

const Item = ({children}) => {
  return <div>{children}</div>
}

const Column = ({title, children}) => {
  return (
    <div className="flex flex-col gap-4 h-full w-fit">
      <div className="mr-12 text-xl">{title}</div>
      {children}
    </div>
  );
};

export default Track;
