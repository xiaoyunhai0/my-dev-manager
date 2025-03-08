export default function ProjectItem({ project }) {
    return (
        <li className="list-group-item">
            <h5>{project.get('name')}</h5>
            <p>{project.get('description')}</p>
        </li>
    );
}
