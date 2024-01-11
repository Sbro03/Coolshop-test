function Row({row, updateNum, updateOp, deleteRow, disableRow}) {
    return ( 
            <div className={`py-1 input-row input-group row g-2 row-4 ${row.disable ? 'disabled' : ''}`}>
                <div className="col-2">
                    <select className="form-select" value={row.operation} onChange={(e) => updateOp(row.id, e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
                <div className="col-6">
                    <input type="text" id="number" className="form-control" disabled={row.disabled} placeholder={row.number} onChange={(e) => updateNum(row.id, e.target.value)}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => disableRow(row.id)}>{row.disabled ? "Enable" : "Disable"}</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-primary" type="button" onClick={() => deleteRow(row.id)}>Delete</button>
                </div>
            </div>
    );
}

export default Row;