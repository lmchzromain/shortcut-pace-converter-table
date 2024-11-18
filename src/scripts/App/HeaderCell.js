import clsx from "clsx";
import PropTypes from "prop-types";

const HeaderCell = ({ children, className = "z-10" }) => {
  return (
    <th
      className={clsx(
        className,
        "sticky top-0 ",
        "bg-blue-500",
        "after:absolute after:left-0 after:right-0 after:w-full",
        "after:bottom-[-1px] after:h-[1px]",
        "after:bg-blue-900",
        "shadow-[inset_-2px_0px_0px_-1px_rgba(30,58,138,0.5)]"
      )}
    >
      <div
        className={clsx(
          "drop-shadow-lg",
          "w-[130px] py-2",
          "text-nowrap",
          "text-white/90",
          "font-medium text-xs"
        )}
      >
        {children}
      </div>
    </th>
  );
};

HeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { HeaderCell };
