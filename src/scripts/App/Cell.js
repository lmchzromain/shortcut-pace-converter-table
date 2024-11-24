import clsx from "clsx";
import PropTypes from "prop-types";

const Cell = ({ children, className = "bg-white" }) => {
  return (
    <td className={clsx(className, "border border-gray-300")}>
      <div
        className={clsx(
          "w-[120px]",
          "text-nowrap text-center",
          "text-slate-700",
          "px-2 py-2",
          "text-xs"
        )}
      >
        {children}
      </div>
    </td>
  );
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Cell };
