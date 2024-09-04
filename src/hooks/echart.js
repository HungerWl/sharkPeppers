import * as echarts from 'echarts'

export function getBarChartOptions(chartInfo, data) {
  return {
    title: {
      text: chartInfo.resName,
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.x),
      axisLabel: {
        color: '#666',
        fontSize: 16,
        fontWeight: 'normal',
      },
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#666',
        fontSize: 16,
      },
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#eee',
        },
      },
    },
    series: [
      {
        data: data.map(item => item.y),
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 1, color: '#188df0' },
          ]),
          borderColor: '#fff',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
        barWidth: '60%',
        emphasis: {
          itemStyle: {
            color: '#ffa022',
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        animationEasing: 'elasticOut',
        animationDelay: idx => idx * 100,
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
      },
      padding: [8, 10],
      formatter: (params) => {
        return `${params[0].name}<br/>${params[0].name}: ${params[0].value}`
      },
    },
  }
}

export function getLineChartOptions(chartInfo, data) {
  return {
    title: {
      text: chartInfo.resName,
      left: 'center',
      top: 'top',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
      },
      padding: [8, 10],
      formatter: (params) => {
        return params
          .map(item => `${item.name}: ${item.value}`)
          .join('<br/>')
      },
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.x),
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 16,
        color: '#333',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 16,
        color: '#333',
      },
    },
    series: [
      {
        data: data.map(item => item.y),
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#53a0fd',
        },
        lineStyle: {
          width: 3,
          color: '#53a0fd',
        },
        areaStyle: {
          color: 'rgba(83, 160, 253, 0.2)',
        },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true,
    },
  }
}

export function getPieChartOptions(chartInfo, data) {
  return {
    title: {
      text: chartInfo.resName,
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderColor: '#333',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
      },
      padding: [8, 10],
      formatter: (params) => {
        return `${params.name}: ${params.value} (${params.percent}%)`
      },
    },
    series: [
      {
        name: chartInfo.name,
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: data.map(item => ({ name: item.x, value: item.y })),
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}: {c} ({d}%)',
          color: '#333',
          fontSize: 16,
          fontWeight: 'bold',
        },
        labelLine: {
          length: 20,
          length2: 20,
          lineStyle: {
            color: '#ddd',
          },
        },
        emphasis: {
          itemStyle: {
            borderColor: '#000',
            borderWidth: 3,
            shadowBlur: 30,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          },
        },
      },
    ],
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center',
      itemWidth: 20,
      itemHeight: 14,
      textStyle: {
        fontSize: 16,
        color: '#333',
      },
    },
  }
}

export function getRadarChartOptions(chartInfo, data) {
  return {
    title: {
      text: chartInfo.resName,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    radar: {
      indicator: data.map(item => ({
        name: item.x,
        max: Math.max(...data.map(i => i.y)),
      })),
      shape: 'circle',
    },
    series: [
      {
        name: chartInfo.name,
        type: 'radar',
        data: [
          {
            value: data.map(item => item.y),
            name: chartInfo.name,
          },
        ],
        itemStyle: {
          color: '#ff9f7f',
        },
        lineStyle: {
          width: 2,
        },
      },
    ],
  }
}
