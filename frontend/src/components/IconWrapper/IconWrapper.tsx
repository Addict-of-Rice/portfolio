import type { FC, ReactNode } from 'react';
import { openInNewTab } from '../../utils/utils';
import Column from '../Structure/Column';
import Typography from '../Typography/Typography';

export type IconWrapperProps = {
  icon: ReactNode;
  title: string;
  link: string;
};

const IconWrapper: FC<IconWrapperProps> = ({ icon, title, link }) => {
  return (
    <Column
      onClick={() => openInNewTab(link)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '6em',
        height: '6em',
        backgroundColor: 'black',
        borderRadius: '16px',
        border: '1px white solid',
        cursor: 'pointer',
        gap: '4px',
      }}
    >
      {icon}
      <Typography variant='small' style={{ textAlign: 'center' }}>
        {title}
      </Typography>
    </Column>
  );
};

export default IconWrapper;
