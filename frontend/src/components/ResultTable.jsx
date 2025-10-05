const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: 8,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: 8,
    textAlign: "center",
  },
};

export default function ResultTable({ iterations, columnKey = "mid" }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Iteration</th>
          <th style={styles.th}>xₖ</th>
          <th style={styles.th}>f(xₖ)</th>
          <th style={styles.th}>Error (%)</th>
        </tr>
      </thead>
      <tbody>
        {iterations.map((iter, i) => (
          <tr key={i}>
            <td style={styles.td}>{i + 1}</td>
            <td style={styles.td}>
              {iter[columnKey] !== undefined ? iter[columnKey].toFixed(6) : "-"}
            </td>
            <td style={styles.td}>
              {iter.fmid !== undefined
                ? iter.fmid.toFixed(6)
                : iter.fx !== undefined
                ? iter.fx.toFixed(6)
                : "-"}
            </td>
            <td style={styles.td}>
              {iter.error !== undefined ? iter.error.toFixed(4) : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
