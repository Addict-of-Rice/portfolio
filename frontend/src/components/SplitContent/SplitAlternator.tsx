import { Children, cloneElement, isValidElement, type FC, type ReactElement, type ReactNode } from 'react';
import SplitContent, { type SplitContentProps } from './SplitContent';

type Props = {
  children: ReactNode;
  initialImgFirst?: boolean;
};

const SplitAlternator: FC<Props> = ({ children, initialImgFirst }) => {
  let splitCount = 0;

  const modifiedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    if (child.type === SplitContent) {
      const imgFirst = initialImgFirst ? splitCount % 2 === 0 : splitCount % 2 !== 0;
      splitCount++;
      return cloneElement(child as ReactElement<SplitContentProps>, { imgFirst });
    }

    return child;
  });

  return <>{modifiedChildren}</>;
};

export default SplitAlternator;
