import clsx from "clsx";
import PropTypes from "prop-types";

const HeaderCell = ({ children, className = "z-10" }) => {
  return (
    <th
      className={clsx(
        className,
        "sticky top-0",
        "bg-volt",
        "before:absolute before:left-0 before:right-0 before:w-full",
        "before:bottom-[-1px] before:h-[1px]",
        "before:bg-neutral-500",
        "shadow-[inset_-1px_0px_1px_0px_rgba(30,58,138,0.5)]"
      )}
    >
      <div
        className={clsx(
          "",
          "w-[130px] py-2",
          "text-nowrap",
          "text-neutral-700",
          "text-xs"
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
