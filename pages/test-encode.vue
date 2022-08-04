<script setup>
import * as base64 from 'base-64'
import * as utf8 from 'utf8'

onMounted(() => {
    const encodedText = base64.encode(utf8.encode("hellllooo guys"))
    console.log(encodedText);    
})
</script>

<template>
    <div>

    </div>
</template>