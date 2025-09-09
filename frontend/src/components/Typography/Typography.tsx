import type { CSSProperties, FC, ReactNode, ElementType, Ref } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import type { Theme } from '../../themes/theme';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'tiny';

type Props = {
  ref?: Ref<HTMLElement>;
  className?: string;
  children: ReactNode;
  variant?: Variant;
  style?: CSSProperties;
  onClick?: () => void;
  span?: boolean;
};

const Typography: FC<Props> = ({
  ref,
  className,
  children,
  variant = 'p',
  style,
  onClick,
  span,
}) => {
  const variantMap: Record<
    Variant,
    {
      tag: ElementType;
      fontFamilyKey: keyof Theme['fontFamily'];
      fontSizeKey: keyof Theme['fontSize'];
    }
  > = {
    h1: { tag: 'h1', fontFamilyKey: 'heading', fontSizeKey: 'h1' },
    h2: { tag: 'h2', fontFamilyKey: 'heading', fontSizeKey: 'h2' },
    h3: { tag: 'h3', fontFamilyKey: 'heading', fontSizeKey: 'h3' },
    h4: { tag: 'h4', fontFamilyKey: 'heading', fontSizeKey: 'h4' },
    h5: { tag: 'h5', fontFamilyKey: 'heading', fontSizeKey: 'h5' },
    h6: { tag: 'h6', fontFamilyKey: 'heading', fontSizeKey: 'h6' },
    p: { tag: 'p', fontFamilyKey: 'body', fontSizeKey: 'p' },
    small: { tag: 'p', fontFamilyKey: 'body', fontSizeKey: 'small' },
    tiny: { tag: 'p', fontFamilyKey: 'body', fontSizeKey: 'tiny' },
  };

  const { theme } = useThemeContext();
  const { tag, fontFamilyKey, fontSizeKey } = variantMap[variant];
  const Tag = span ? 'span' : tag;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        fontFamily: theme.fontFamily[fontFamilyKey],
        fontSize: theme.fontSize[fontSizeKey],
        fontWeight: theme.fontWeight,
        color: theme.color.text,
        margin: 0,
        padding: 0,
        whiteSpace: 'pre',
        display: 'flex',
        flexDirection: 'row',
        cursor: onClick ? 'pointer' : undefined,
        userSelect: 'none',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default Typography;
