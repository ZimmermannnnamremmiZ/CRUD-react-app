import "./app-info.css";

const AppInfo = ({allEmployeers, allIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {allEmployeers}</h2>
            <h2>Премию получат: {allIncreased}</h2>
        </div>
    )
}

export default AppInfo;