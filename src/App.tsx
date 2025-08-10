import {
  IoSearchOutline,
  IoHomeOutline,
  IoFolderOpenOutline,
  IoPieChartOutline,
  IoPeopleOutline,
  IoChatbubblesOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const navItems = [
  { icon: IoSearchOutline, label: 'Search' },
  { icon: IoHomeOutline, label: 'Home' },
  { icon: IoFolderOpenOutline, label: 'Projects' },
  { icon: IoPieChartOutline, label: 'Dashboard' },
  { icon: IoPeopleOutline, label: 'Team' },
  { icon: IoChatbubblesOutline, label: 'Support' },
  { icon: IoSettingsOutline, label: 'Settings' },
];

export default function App() {
  return (
    <div className="flex">
      <nav className="peer group fixed top-0 left-0 h-screen w-20 hover:w-56 bg-gray-900 text-white transition-all duration-300">
        <ul className="flex flex-col h-full">
          <li className="flex justify-center p-4">
            <a className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1438.88 1819.54"
                className="h-6 w-6"
              >
                <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
                <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
              </svg>
            </a>
          </li>
          {navItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center p-4 hover:bg-gray-800">
              <Icon className="text-2xl" />
              <span className="ml-4 hidden whitespace-nowrap group-hover:inline">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="ml-20 flex-1 p-8 transition-all duration-300 peer-hover:ml-56">
        <div className="bg-violet-300 text-white w-full h-64 flex items-center justify-center">
          <h1 className="text-5xl">SSS</h1>
        </div>
        <h2 className="mt-8 text-3xl font-bold">Lorem ipsum!</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corporis, rerum
          doloremque iste sed voluptates omnis molestias molestiae animi recusandae labore sit
          amet delectus ad necessitatibus laudantium qui! Magni quisquam illum quaerat
          necessitatibus sint quibusdam perferendis! Aut ipsam cumque deleniti error perspiciatis
          iusto accusamus consequuntur assumenda. Obcaecati minima sed natus?
        </p>
        <div className="mt-8 h-48 w-full bg-gray-400" />
      </main>
    </div>
  );
}

