const tableData = [
  {
    regionName: '中华地区部',
    supplier: 180,
    serviceCenter: 345,
    perNumber: 1321,
    other: 32,
    children: [
      {
        regionName: '浙江代表处',
        supplier: 23,
        serviceCenter: 45,
        perNumber: 132,
        other: 12,
      },
      {
        regionName: '广东代表处',
        supplier: 12,
        serviceCenter: 33,
        perNumber: 111,
        other: 32,
      },
      {
        regionName: '广西代表处',
        supplier: 23,
        serviceCenter: 45,
        perNumber: 31,
        other: 33,
      },
      {
        regionName: '南京代表处',
        supplier: 12,
        serviceCenter: 33,
        perNumber: 65,
        other: 43,
      },
    ]
  },
  {
    regionName: '西欧地区部',
    supplier: 78,
    serviceCenter: 145,
    perNumber: 431,
    other: 12,
    children: [
      {
        regionName: '西欧代表处1',
        supplier: 12,
        serviceCenter: 23,
        perNumber: 33,
        other: 87,
      },
      {
        regionName: '西欧代表处2',
        supplier: 3,
        serviceCenter: 12,
        perNumber: 56,
        other: 76,
      },
    ]
  },
  {
    regionName: '北欧地区部',
    supplier: 56,
    serviceCenter: 123,
    perNumber: 431,
    other: 87,
    children: [
      {
        regionName: '北欧代表处1',
        supplier: 23,
        serviceCenter: 34,
        perNumber: 88,
        other: 98,
      },
      {
        regionName: '北欧代表处2',
        supplier: 6,
        serviceCenter: 14,
        perNumber: 43,
        other: 231,
      },
    ],
  },
  {
    regionName: '新地区部',
    supplier: 123,
    serviceCenter: 432,
    perNumber: 7312,
    other: 3213,
    children: [
      {
        regionName: '新代表处1',
        supplier: 123,
        serviceCenter: 321,
        perNumber: 1322,
        other: 332,
      },
      {
        regionName: '新代表处2',
        supplier: 13,
        serviceCenter: 321,
        perNumber: 455,
        other: 231,
      },
      {
        regionName: '新代表处3',
        supplier: 567,
        serviceCenter: 1231,
        perNumber: 3212,
        other: 231,
      },
      {
        regionName: '新代表处4',
        supplier: 6,
        serviceCenter: 14,
        perNumber: 43,
        other: 231,
      },
    ],
  }
]
exports.default = tableData