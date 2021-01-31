import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  // Overview
  {
    title: 'Dashboard',
    path: '/',
    icon: <RiIcons.RiDashboardLine />,
  },

  {
    title: 'Overview',
    path: '/#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  // Reports
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports',
        path: '/reports/report1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 2',
        path: '/reports/report2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 3',
        path: '/reports/report3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  // Products
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
];
