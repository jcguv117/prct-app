import React from 'react'

export const StatCard = ({title, stat, Icon}) => {
  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 class="tracking-tight text-sm font-medium">{title}</h3>
        <Icon />
      </div>
      <div class="p-6 pt-0">
        <div class="text-2xl font-bold">{stat}</div>
      </div>
    </div>
  );
}
