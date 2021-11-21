<template>
  <div class="absolute
    lg: -bottom-20
    flex
    flex-row
    lg: felx-row
    bg-white
    gap-y-4
    gap-x-12
    px8
    pt-8
    pb-12
    pr-8
    pl-8
    rounded-md
  ">
  <!-- Flex items #1 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">IP Address</h3>
      <span class="text-2xl">{{ipInfo.address}}</span>
    </div>
    <!-- Flex items #2 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ipInfo.state}}</span>
    </div>
    <!-- Flex items #3 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Time Zone</h3>
      <span class="text-2xl">UTC{{ipInfo.timezone}}</span>
    </div>
    <!-- Flex items #4 -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">ISP</h3>
      <span class="text-2xl overflow-ellipsis">{{ipInfo.isp}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'IPinfo',
  props: ['ipInfo'],
}
</script>

<style>

</style>