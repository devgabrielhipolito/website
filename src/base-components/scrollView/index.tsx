import React, { FC, ReactNode } from "react";

type FlatListProps<T> = React.ComponentProps<"div"> & {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  direction?: "row" | "column";
  ListEmptyComponent?: ReactNode;
  gap?: number;
};

export function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
  direction = "row",
  ListEmptyComponent,
  gap = 20,
  className,
  style,
  ...rest
}: FlatListProps<T>) {
  if (data.length === 0 && ListEmptyComponent) {
    return <>{ListEmptyComponent}</>;
  }



  return (
    <div
      className={` flex  gap-20  fle`}
      style={style}
      {...rest}>
      {data.map((item, index) => (
        <React.Fragment key={keyExtractor ? keyExtractor(item, index) : index}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </div>
  );
}
