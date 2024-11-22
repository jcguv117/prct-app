
import { Link } from 'preact-router';

export const SideMenuItem = ({ href, icon, title, subTitle }) => {
  return (
      <Link activeClassName="active" href={ href }>
        <div>
          {/* <Icon /> */}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">{ title }</span>
          <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
        </div>
    </Link>
  );
}