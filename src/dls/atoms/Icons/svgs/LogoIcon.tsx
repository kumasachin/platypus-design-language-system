import { SVGIcon, SVGProps } from '../Generator/svg';
import { ReactComponent as IconLogo } from 'stories/shared/Icons/platypus-logo.svg';

const LogoIcon = (props: SVGProps) => (
  <SVGIcon data-dls="atom-icon-logo" Icon={IconLogo} />
);

export default LogoIcon;
