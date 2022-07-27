<template>

  <div class="app">
    <div class='grid-demo'>
      <h2>grid</h2>
      <div class="grid-basic">
        <x-row>
          <x-col :span="24">
            <div class="grid-content bg-grey-dark">24</div>
          </x-col>
        </x-row>
        <br>
        <x-row>
          <x-col :span="12">
            <div class="grid-content bg-grey-dark">12</div>
          </x-col>
          <x-col :span="12">
            <div class="grid-content bg-grey-light">12</div>
          </x-col>
        </x-row>
        <br>
        <x-row>
          <x-col :span="8">
            <div class="grid-content bg-grey-dark">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content bg-grey-light">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content bg-grey-dark">8</div>
          </x-col>
        </x-row>
        <br>
        <x-row>
          <x-col :span="6">
            <div class="grid-content bg-grey-dark">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-light">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-dark">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-light">6</div>
          </x-col>
        </x-row>
      </div>
      <br>
      <div class="grid-gutter">
        <x-row :gutter="20">
          <x-col :span="6">
            <div class="grid-content bg-grey-dark">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-light">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-dark">6</div>
          </x-col>
          <x-col :span="6">
            <div class="grid-content bg-grey-light">6</div>
          </x-col>
        </x-row>
      </div>
      <br>
      <div class="grid-offset">
        <x-row>
          <x-col :span="8">
            <div class="grid-content bg-grey-dark">8</div>
          </x-col>
          <x-col :span="8" :offset="8">
            <div class="grid-content bg-grey-dark">8</div>
          </x-col>
        </x-row>
      </div>
      <br>
      <div class="grid-flex">
        <x-row justify="start">
          <x-col :span="4">
            <div class="grid-content bg-grey-dark">4</div>
          </x-col>
          <x-col :span="4">
            <div class="grid-content bg-grey-light">4</div>
          </x-col>
          <x-col :span="4">
            <div class="grid-content bg-grey-dark">4</div>
          </x-col>
        </x-row>
        <br>
        <x-row justify="end">
          <x-col :span="4">
            <div class="grid-content bg-grey-dark">4</div>
          </x-col>
          <x-col :span="4">
            <div class="grid-content bg-grey-light">4</div>
          </x-col>
          <x-col :span="4">
            <div class="grid-content bg-grey-dark">4</div>
          </x-col>
        </x-row>
        <br>
        <x-row align="start">
          <x-col :span="8">
            <div class="grid-content grid-content-1 bg-grey-dark">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content grid-content-2 bg-grey-light">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content grid-content-3 bg-grey-dark">8</div>
          </x-col>
        </x-row>
        <br>
        <x-row align="center">
          <x-col :span="8">
            <div class="grid-content grid-content-1 bg-grey-dark">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content grid-content-2 bg-grey-light">8</div>
          </x-col>
          <x-col :span="8">
            <div class="grid-content grid-content-3 bg-grey-dark">8</div>
          </x-col>
        </x-row>
        <br>
      </div>
      <br>
      <div class="grid-responsive">
        <x-row :gutter="20">
          <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-grey-dark"></div>
          </x-col>
          <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-grey-light"></div>
          </x-col>
          <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-grey-dark"></div>
          </x-col>
          <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-grey-light"></div>
          </x-col>
        </x-row>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="container-demo">
      <h2>container</h2>
      <div class="container-basic">
        <x-container>
          <x-header>Header</x-header>
          <x-main>Main</x-main>
        </x-container>
        <br>
        <x-container>
          <x-header>Header</x-header>
          <x-main>Main</x-main>
          <x-footer>Footer</x-footer>
        </x-container>
        <br>
        <x-container>
          <x-aside width="200px">Aside</x-aside>
          <x-main>Main</x-main>
        </x-container>
        <br>
        <x-container>
          <x-header>Header</x-header>
          <x-container>
            <x-aside width="200px">Aside</x-aside>
            <x-main>Main</x-main>
          </x-container>
        </x-container>
        <br>
        <x-container>
          <x-header>Header</x-header>
          <x-container>
            <x-aside width="200px" style="line-height:220px">Aside</x-aside>
            <x-container>
              <x-main>Main</x-main>
              <x-footer>Footer</x-footer>
            </x-container>
          </x-container>
        </x-container>
        <br>
        <x-container>
          <x-aside style="line-height:220px">Aside</x-aside>
          <x-container>
            <x-header>Header</x-header>
            <x-main>Main</x-main>
          </x-container>
        </x-container>
        <br>
        <x-container>
          <x-aside style="line-height:280px">Aside</x-aside>
          <x-container>
            <x-header>Header</x-header>
            <x-main>Main</x-main>
            <x-footer>Footer</x-footer>
          </x-container>
        </x-container>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="icon-demo">
      <h2>icon</h2>
      <div class="icon-basic">
        <x-space>
          <x-icon icon="location" @click="handleClickIcon"></x-icon>
          <x-icon icon="check-square"></x-icon>
          <x-icon icon="left-circle-fill" :size="26"></x-icon>
          <x-icon icon="star-fill" color="pink"></x-icon>
          <x-icon icon="calendar"></x-icon>
        </x-space>
      </div>
      <br>
      <div class="icon-collection">
        <div class="card">
          <x-icon icon="check-circle"></x-icon>
          <span>icon-check-circle</span>
        </div>
        <div class="card">
          <x-icon icon="close-circle"></x-icon>
          <span>icon-close-circle</span>
        </div>
        <div class="card">
          <x-icon icon="info-circle"></x-icon>
          <span>icon-info-circle</span>
        </div>
        <div class="card">
          <x-icon icon="left-circle"></x-icon>
          <span>icon-left-circle</span>
        </div>
        <div class="card">
          <x-icon icon="down-circle"></x-icon>
          <span>icon-down-circle</span>
        </div>
        <div class="card">
          <x-icon icon="minus-circle"></x-icon>
          <span>icon-minus-circle</span>
        </div>
        <div class="card">
          <x-icon icon="plus-circle"></x-icon>
          <span>icon-plus-circle</span>
        </div>
        <div class="card">
          <x-icon icon="question-circle"></x-icon>
          <span>icon-question-circle</span>
        </div>
        <div class="card">
          <x-icon icon="right-circle"></x-icon>
          <span>icon-right-circle</span>
        </div>
        <div class="card">
          <x-icon icon="up-circle"></x-icon>
          <span>icon-up-circle</span>
        </div>
        <div class="card">
          <x-icon icon="warning-circle"></x-icon>
          <span>icon-warning-circle</span>
        </div>
        <div class="card">
          <x-icon icon="sync"></x-icon>
          <span>icon-sync</span>
        </div>
        <div class="card">
          <x-icon icon="setting"></x-icon>
          <span>icon-setting</span>
        </div>
        <div class="card">
          <x-icon icon="location"></x-icon>
          <span>icon-location</span>
        </div>
        <div class="card">
          <x-icon icon="edit-square"></x-icon>
          <span>icon-edit-square</span>
        </div>
        <div class="card">
          <x-icon icon="check-square"></x-icon>
          <span>icon-check-square</span>
        </div>
        <div class="card">
          <x-icon icon="user"></x-icon>
          <span>icon-user</span>
        </div>
        <div class="card">
          <x-icon icon="image"></x-icon>
          <span>icon-image</span>
        </div>
        <div class="card">
          <x-icon icon="heart"></x-icon>
          <span>icon-heart</span>
        </div>
        <div class="card">
          <x-icon icon="edit"></x-icon>
          <span>icon-edit</span>
        </div>
        <div class="card">
          <x-icon icon="key"></x-icon>
          <span>icon-key</span>
        </div>
        <div class="card">
          <x-icon icon="verticalright"></x-icon>
          <span>icon-verticalright</span>
        </div>
        <div class="card">
          <x-icon icon="verticalleft"></x-icon>
          <span>icon-verticalleft</span>
        </div>
        <div class="card">
          <x-icon icon="search"></x-icon>
          <span>icon-search</span>
        </div>
        <div class="card">
          <x-icon icon="right"></x-icon>
          <span>icon-right</span>
        </div>
        <div class="card">
          <x-icon icon="left"></x-icon>
          <span>icon-left</span>
        </div>
        <div class="card">
          <x-icon icon="up"></x-icon>
          <span>icon-up</span>
        </div>
        <div class="card">
          <x-icon icon="down"></x-icon>
          <span>icon-down</span>
        </div>
        <div class="card">
          <x-icon icon="fullscreen"></x-icon>
          <span>icon-fullscreen</span>
        </div>
        <div class="card">
          <x-icon icon="fullscreen-exit"></x-icon>
          <span>icon-fullscreen-exit</span>
        </div>
        <div class="card">
          <x-icon icon="arrowright"></x-icon>
          <span>icon-arrowright</span>
        </div>
        <div class="card">
          <x-icon icon="arrowup"></x-icon>
          <span>icon-arrowup</span>
        </div>
        <div class="card">
          <x-icon icon="arrowleft"></x-icon>
          <span>icon-arrowleft</span>
        </div>
        <div class="card">
          <x-icon icon="arrowdown"></x-icon>
          <span>icon-arrowdown</span>
        </div>
        <div class="card">
          <x-icon icon="upload"></x-icon>
          <span>icon-upload</span>
        </div>
        <div class="card">
          <x-icon icon="download"></x-icon>
          <span>icon-download</span>
        </div>
        <div class="card">
          <x-icon icon="check"></x-icon>
          <span>icon-check</span>
        </div>
        <div class="card">
          <x-icon icon="close"></x-icon>
          <span>icon-close</span>
        </div>
        <div class="card">
          <x-icon icon="check-circle-fill"></x-icon>
          <span>icon-check-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="left-circle-fill"></x-icon>
          <span>icon-left-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="down-circle-fill"></x-icon>
          <span>icon-down-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="minus-circle-fill"></x-icon>
          <span>icon-minus-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="close-circle-fill"></x-icon>
          <span>icon-close-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="info-circle-fill"></x-icon>
          <span>icon-info-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="up-circle-fill"></x-icon>
          <span>icon-up-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="right-circle-fill"></x-icon>
          <span>icon-right-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="plus-circle-fill"></x-icon>
          <span>icon-plus-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="question-circle-fill"></x-icon>
          <span>icon-question-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="warning-circle-fill"></x-icon>
          <span>icon-warning-circle-fill</span>
        </div>
        <div class="card">
          <x-icon icon="check-square-fill"></x-icon>
          <span>icon-check-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="down-square-fill"></x-icon>
          <span>icon-down-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="minus-square-fill"></x-icon>
          <span>icon-minus-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="close-square-fill"></x-icon>
          <span>icon-close-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="left-square-fill"></x-icon>
          <span>icon-left-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="up-square-fill"></x-icon>
          <span>icon-up-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="right-square-fill"></x-icon>
          <span>icon-right-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="plus-square-fill"></x-icon>
          <span>icon-plus-square-fill</span>
        </div>
        <div class="card">
          <x-icon icon="eye-close"></x-icon>
          <span>icon-eye-close</span>
        </div>
        <div class="card">
          <x-icon icon="eyeclose-fill"></x-icon>
          <span>icon-eyeclose-fill</span>
        </div>
        <div class="card">
          <x-icon icon="eye-fill"></x-icon>
          <span>icon-eye-fill</span>
        </div>
        <div class="card">
          <x-icon icon="eye"></x-icon>
          <span>icon-eye</span>
        </div>
        <div class="card">
          <x-icon icon="attachment"></x-icon>
          <span>icon-attachment</span>
        </div>
        <div class="card">
          <x-icon icon="cloud-upload"></x-icon>
          <span>icon-cloud-upload</span>
        </div>
        <div class="card">
          <x-icon icon="calendar"></x-icon>
          <span>icon-calendar</span>
        </div>
        <div class="card">
          <x-icon icon="doubleleft"></x-icon>
          <span>icon-doubleleft</span>
        </div>
        <div class="card">
          <x-icon icon="doubleright"></x-icon>
          <span>icon-doubleright</span>
        </div>
        <div class="card">
          <x-icon icon="star"></x-icon>
          <span>icon-star</span>
        </div>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="button-demo">
      <h2>button</h2>
      <div class="button-basic">
        <x-space>
          <x-button type="default">Default</x-button>
          <x-button type="primary">Primary</x-button>
          <x-button type="link">Link</x-button>
          <x-button type="ghost">Ghost</x-button>
          <x-button type="delicate">Delicate</x-button>
        </x-space>
        <x-space>
          <x-button type="default" status="success">success</x-button>
          <x-button type="default" status="info">info</x-button>
          <x-button type="default" status="warning">warning</x-button>
          <x-button type="default" status="danger">danger</x-button>
        </x-space>
        <x-space>
          <x-button type="primary" status="success">success</x-button>
          <x-button type="primary" status="info">info</x-button>
          <x-button type="primary" status="warning">warning</x-button>
          <x-button type="primary" status="danger">danger</x-button>
        </x-space>
        <x-space>
          <x-button type="primary" shape="square">square</x-button>
          <x-button type="primary" shape="square" icon="search"></x-button>
          <x-button type="primary" shape="round">round</x-button>
          <x-button type="primary" shape="circle" icon="edit"></x-button>
        </x-space>
      </div>
      <div class="button-size">
        <x-space>
          <x-button size="xs">xs</x-button>
          <x-button size="sm">sm</x-button>
          <x-button size="md">md</x-button>
          <x-button size="lg">lg</x-button>
        </x-space>
      </div>
      <div class="button-icon">
        <x-space>
          <x-button type="primary" status="success" shape="circle" icon="check"></x-button>
          <x-button type="primary" icon="search">search</x-button>
          <x-button icon="edit" iconPosition="right">edit</x-button>
        </x-space>
      </div>
      <div class="button-loading">
        <x-space>
          <x-button :loading="true"></x-button>
          <x-button :loading="true" type="primary">loading</x-button>
          <x-button :loading="true" type="link" status="success">loading</x-button>
        </x-space>
      </div>
      <div class="button-disabled">
        <x-space>
          <x-button :disabled="true">disable</x-button>
          <x-button :disabled="true" type="primary" status="success">disable</x-button>
        </x-space>
      </div>
      <div class="button-group">
        <x-space>
          <x-button-group>
            <x-button type="primary" icon="left" icon-position="left">上一页</x-button>
            <x-button type="primary" icon="right" icon-position="right">下一页</x-button>
          </x-button-group>
          <x-button-group>
            <x-button icon="search"></x-button>
            <x-button icon="setting"></x-button>
            <x-button icon="edit"></x-button>
          </x-button-group>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="input-demo">
      <h2>input</h2>
      <div class="input-basic">
        <x-space>
          <x-input v-model="inputValue1" type="text" placeholder="请输入内容" name="username" @change="handInputChange"></x-input>{{inputValue1}}
        </x-space>
      </div>
      <div class="input-disabled">
        <x-space>
          <x-input v-model="inputValue2" type="text" placeholder="请输入内容" name="username" disabled></x-input>
          <x-input v-model="inputValue2" type="text" placeholder="请输入内容" name="username" readonly></x-input>
        </x-space>
      </div>
      <div class="input-clearable">
        <x-space>
          <x-input v-model="inputValue3" type="text" placeholder="请输入内容" name="username" clearable></x-input>
        </x-space>
      </div>
      <div class="input-password">
        <x-space>
          <x-input v-model="inputValue4" type="password" placeholder="请输入内容" name="password" show-password></x-input>
        </x-space>
      </div>
      <div class="input-icon">
        <x-space>
          <x-input v-model="inputValue5" type="text" placeholder="请输入内容" name="username" prefix-icon="edit"></x-input>
          <x-input v-model="inputValue5" type="text" placeholder="请输入内容" name="username" suffix-icon="edit"></x-input>
        </x-space>
      </div>
      <div class="input-size">
        <x-space>
          <x-input size="lg" prefix-icon="edit"></x-input>
          <x-input size="md" prefix-icon="edit"></x-input>
          <x-input size="sm" prefix-icon="edit"></x-input>
          <x-input size="xs" prefix-icon="edit"></x-input>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="textarea-demo">
      <h2>textarea</h2>
      <div class="textarea-basic">
        <x-textarea v-model="textareaValue1" placeholder="请输入内容" @input="handleTextareaInput"></x-textarea>
      </div>
      <div class="textarea-disabled">
        <x-textarea disabled v-model="textareaValue2" placeholder="请输入内容"></x-textarea>
      </div>
      <div class="textarea-maxlength">
        <x-textarea v-model="textareaValue3" placeholder="请输入内容" :maxlength="50"></x-textarea>
      </div>
      <div class="textarea-focusColor">
        <x-textarea v-model="textareaValue4" placeholder="请输入内容" focusColor="#ec3437" @input="handleTextareaInput"></x-textarea>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="space-demo">
      <h2>space</h2>
      <div class="space-basic">
        <x-space>
          <x-button v-for="i in 10" :key="i">button{{i}}</x-button>
        </x-space>
      </div>
      <div class="space-vertical">
        <x-space :inline="false">
          <x-button v-for="i in 5" :key="i">button{{i}}</x-button>
        </x-space>
      </div>
      <div class="space-size">
        <x-space :size=[15,5]>
          <x-button v-for="i in 15" :key="i">button{{i}}</x-button>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="divider-demo">
      <h2>divider</h2>
      <div class="divider-basic">
        <span>有些爱像断线纸鸢 结局悲余手中线</span>
        <x-divider></x-divider>
        <span>有些恨像是一个圈 冤冤相报不了结</span>
      </div>
      <div class="divider-vertical">
        <span>雨纷纷</span>
        <x-divider direction="vertical"></x-divider>
        <span>旧故里</span>
        <x-divider direction="vertical"></x-divider>
        <span>草木深</span>
      </div>
      <div class="divider-position">
        <x-divider content-position="left">半城烟沙</x-divider>
        <x-divider>
          <x-icon icon="heart"></x-icon>
        </x-divider>
        <x-divider content-position="right">随风而下</x-divider>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="select-demo">
      <h2>select</h2>
      <div class="select-basic">
        <x-select placeholder="请选择" :options="selectOptions1" v-model="selectValue1" @change="handleSelectChange"></x-select>
      </div>
      <br>
      <div class="select-disabled">
        <x-select placeholder="请选择" :options="selectOptions2" v-model="selectValue2" disabled></x-select>
      </div>
      <br>
      <div class="select-optdisabled">
        <x-select placeholder="请选择" :options="selectOptions3" v-model="selectValue3"></x-select>
      </div>
      <br>
      <div class="select-optdisabled">
        <x-select placeholder="请选择" :options="selectOptions4" v-model="selectValue4" labelFiled="cityName" valueFiled="cityCode"></x-select>
      </div>
      <br>
      <div class="select-searchable">
        <x-select placeholder="请选择" :options="selectOptions5" v-model="selectValue5" searchable></x-select>
      </div>
      <br>
      <div class="select-multiple">
        <x-select placeholder="请选择" :options="selectOptions6" v-model="selectValue6" multiple @change="handleSelectChange" width="400px" height="60px"></x-select>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="radio-demo">
      <h2>radio</h2>
      <div class="radio-basic">
        <x-radio label="1" v-model="radioValue1" @change="handleRadioChange">女</x-radio>
        <x-radio label="2" v-model="radioValue1" @change="handleRadioChange">男</x-radio>
      </div>
      <br>
      <div class="radio-disabled">
        <x-radio disabled v-model="radioValue2" label="1">女</x-radio>
        <x-radio disabled v-model="radioValue2" label="2">男</x-radio>
      </div>
      <br>
      <div class="radio-group">
        <x-radio-group v-model="radioValue3">
          <x-radio label="1">北京</x-radio>
          <x-radio label="2">上海</x-radio>
          <x-radio label="3">杭州</x-radio>
        </x-radio-group>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="checkbox-demo">
      <h2>checkbox</h2>
      <div class="checkbox-basic">
        <x-checkbox v-model="checkValue1" @change="handleCheckChange">同意</x-checkbox>
      </div>
      <br>
      <div class="checkbox-disabled">
        <x-checkbox v-model="checkValue2" disabled>同意</x-checkbox>
      </div>
      <br>
      <div class="check-group">
        <x-checkbox-group v-model="checkedList">
          <x-checkbox label="北京">北京</x-checkbox>
          <x-checkbox label="上海">上海</x-checkbox>
          <x-checkbox label="杭州">杭州</x-checkbox>
        </x-checkbox-group>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="switch-demo">
      <h2>switch</h2>
      <div class="switch-basic">
        <x-switch v-model="switchValue1" @change="handleSwitchChange"></x-switch>
      </div>
      <br>
      <div class="swtich-disabled">
        <x-switch v-model="switchValue2" disabled></x-switch>
      </div>
      <br>
      <div class="switch-color">
        <x-switch v-model="switchValue3" active-color="#13ce66" inactive-color="#ff4949"></x-switch>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="inputNumber-demo">
      <h2>inputNumber</h2>
      <div class="inputNumber-basic">
        <x-input-number v-model="inputNumberValue1" :min="1" :max="10" @change="handleInputNumberChange"></x-input-number>
      </div>
      <br>
      <div class="inputNumber-disabled">
        <x-input-number v-model="inputNumberValue2" disabled></x-input-number>
      </div>
      <br>
      <div class="inputNumber-step">
        <x-input-number v-model="inputNumberValue3" :step="2"></x-input-number>
      </div>
      <br>
      <div class="inputNumber-precision">
        <x-input-number v-model="inputNumberValue4" :precision="2" :step="0.1" :max="10"></x-input-number>
      </div>
      <br>
      <div class="inputNumber-size">
        <x-space>
          <x-input-number size="lg" v-model="inputNumberValue5"></x-input-number>
          <x-input-number size="md" v-model="inputNumberValue5"></x-input-number>
          <x-input-number size="sm" v-model="inputNumberValue5"></x-input-number>
          <x-input-number size="xs" v-model="inputNumberValue5"></x-input-number>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="rate-demo">
      <h2>rate</h2>
      <div class="rate-basic">
        <x-rate v-model="rateValue1" score></x-rate>
      </div>
      <br>
      <div class="rate-disabled">
        <x-rate v-model="rateValue2" disabled></x-rate>
      </div>
      <br>
      <div class="rate-custom">
        <x-rate v-model="rateValue3" :num="10" :total="10" icon="hot-fill" :size="25" dark-color="#99a9bf" bright-color="#f56c6c" score big>
          <span slot="score">热度: {{rateValue3.toFixed(1)}}</span>
        </x-rate>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="datePicker-demo">
      <h2>datePicker</h2>
      <div class="datePicker-basic">
        <x-date-picker v-model="datePickerValue"></x-date-picker>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="upload-demo">
      <h2>upload</h2>
      <div class="upload-basic">
        <x-upload :file-list="fileList" name="avatar" accept="image/jpeg,image/png" multiple :limit="3" action="http://localhost:3000/upload" :on-exceed="handleExceed" :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" :before-upload="handleBeforeUpload">
          <x-button icon="upload" icon-position="right">上传文件</x-button>
          <div slot="tip">只能上传jpeg、png文件，且大小不超过500kb</div>
        </x-upload>
      </div>
      <br>
      <div class="upload-drag">
        <x-upload name="avatar" action="http://localhost:3000/upload" accept="image/jpeg,image/png" :limit="3" :multiple="true" :on-exceed="handleExceed" :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" :before-upload="handleBeforeUpload" :drag="true">
          <div slot="tip">只能上传jpg、jpeg、png文件，且大小不超过500kb</div>
        </x-upload>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="table-demo">
      <h2>table</h2>
      <div class="table-basic">
        <x-table :options="tableOptions1"></x-table>
      </div>
      <br>
      <div class="table-size">
        <x-table :options="tableOptions2" size="sm"></x-table>
        <br>
        <x-table :options="tableOptions2" size="xs"></x-table>
      </div>
      <br>
      <div class="table-custom">
        <x-table :options="tableOptions3" :headStyle="headStyle" :rowStyle="rowStyle" size="sm"></x-table>
      </div>
      <br>
      <div class="table-slot">
        <x-table :options="tableOptions4">
          <template v-slot:head-age="{scope}">
            <div style="color: green">{{ scope.title }}</div>
          </template>
          <template v-slot:id="{scope}">
            <div style="color: #008dff">{{ scope.row.id }}</div>
          </template>
          <template v-slot:action="{scope}">
            <x-button icon="edit" type="primary" :disabled="scope.rowIndex % 2 == 0">编辑</x-button>
            <x-button icon="delete" status="danger" style="margin-left: 5px" @click="handleDelete(scope.rowIndex)">删除</x-button>
          </template>
        </x-table>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="list-demo">
      <h2>list</h2>
      <div class="list-basic">
        <x-list :data="listData1"></x-list>
      </div>
      <br>
      <div class="list-custom">
        <x-list :data="listData2" size="lg" border hover></x-list>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="tag-demo">
      <div class="tag-basic">
        <x-space>
          <x-tag>默认tag</x-tag>
          <x-tag v-for="(tag,index) in tagData" :key="tag.text" :type="tag.type" :size="tag.size" closable @close="handleTagClose(index)">{{tag.text}}</x-tag>
        </x-space>
      </div>
      <br>
      <div class="tag-custom">
        <x-tag color="pink" type="info"><a style="color:white" target="_blank" href="https://www.baidu.com">
            Link
          </a></x-tag>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="badge-demo">
      <h2>badge</h2>
      <div class="badge-basic">
        <x-space>
          <x-badge :value="1">
            <x-button>回复</x-button>
          </x-badge>
          <x-badge :value="30" :max="20" type="">
            <x-button>关注</x-button>
          </x-badge>
          <x-badge value="hot">
            <x-button>评论</x-button>
          </x-badge>
          <x-badge isDot>
            <x-icon icon="setting"></x-icon>
          </x-badge>
          <x-badge isDot color="#e6a23c">更新</x-badge>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="avatar-demo">
      <h2>avatar</h2>
      <div class="avatar-basic">
        <x-space>
          <x-avatar size="lg">LG</x-avatar>
          <x-avatar size="md">MD</x-avatar>
          <x-avatar size="sm">SM</x-avatar>
          <x-avatar size="xs">XS</x-avatar>
        </x-space>
        <x-space>
          <x-avatar size="lg" shape="circle">LG</x-avatar>
          <x-avatar size="md" shape="circle">MD</x-avatar>
          <x-avatar size="sm" shape="circle">SM</x-avatar>
          <x-avatar size="xs" shape="circle">XS</x-avatar>
        </x-space>
      </div>
      <br>
      <div class="avatar-type">
        <x-space>
          <x-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></x-avatar>
          <x-badge value="99+">
            <x-avatar>
              <x-icon icon="user" color="white"></x-icon>
            </x-avatar>
          </x-badge>
          <x-avatar>user</x-avatar>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="card-demo">
      <h2>card</h2>
      <div class="card-basic">
        <x-card style="width:480px">
          <div slot="header">
            <span>卡片名称</span>
            <x-button style="float: right; padding: 3px 0" type="delicate">操作按钮</x-button>
          </div>
          <div v-for="i in 4" :key="i" style="margin-bottom: 18px; font-size: 14px">
            {{'列表内容 ' + i }}
          </div>
        </x-card>
      </div>
      <br>
      <div class="card-img">
        <x-card body-style="padding: 0px">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
          <div class="text">
            <span>好吃的汉堡</span>
            <div>
              <time class="time">{{ currentDate }}</time>
              <x-button type="delicate" class="button">操作按钮</x-button>
            </div>
          </div>
        </x-card>
      </div>
      <br>
      <div class="card-shadow">
        <x-space>
          <x-card shadow="always">
            总是显示
          </x-card>
          <x-card shadow="never">
            从不显示
          </x-card>
          <x-card shadow="hover">
            鼠标悬浮时显示
          </x-card>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="carousel-demo">
      <h2>carousel</h2>
      <div class="carousel-basic">
        <x-carousel height="200px" :autoplay="true" :delay="2000" :initial-index="0" :loop="true">
          <x-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </x-carousel-item>
        </x-carousel>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="tab-demo">
      <h2>tab</h2>
      <div class="tab-basic">
        <x-tab v-model="tabActive1" @tab-click="handleTabClick">
          <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
          <x-tab-pane label="配置管理" name="second" icon="setting">配置管理</x-tab-pane>
          <x-tab-pane label="角色管理" name="third" disabled>角色管理</x-tab-pane>
          <x-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</x-tab-pane>
        </x-tab>
      </div>
      <br>
      <div class="tab-card">
        <x-tab v-model="tabActive2" type="card" @tab-click="handleTabClick">
          <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
          <x-tab-pane label="配置管理" name="second">配置管理</x-tab-pane>
          <x-tab-pane label="角色管理" name="third" disabled>角色管理</x-tab-pane>
          <x-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</x-tab-pane>
        </x-tab>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="pagination-demo">
      <h2>pagination</h2>
      <div class="pagination-basic">
        <x-pagination :total="10" :pager-count="7" :current-page.sync="currentPage"></x-pagination>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="skeleton-demo">
      <h2>skeleton</h2>
      <div class="skeleton-basic">
        <x-space>
          <x-button @click="handleShowSkeleton(1)">骨架屏样式一</x-button>
          <x-button @click="handleShowSkeleton(2)">骨架屏样式二</x-button>
          <x-button @click="handleShowSkeleton(3)">骨架屏样式三</x-button>
          <x-button @click="handleShowSkeleton(4)">骨架屏样式四</x-button>
          <x-skeleton v-if="skeletonShow" :type="skeletonType"></x-skeleton>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="progress-demo">
      <h2>progress</h2>
      <div class="progress-basic">
        <x-progress type="bar" :width="10" :percentage="50" color="lightblue"></x-progress>
        <br>
        <x-progress type="bar" :width="15" :percentage="30" color="rgb(255, 193, 7)"></x-progress>
        <br>
        <x-progress type="circle" color="lightblue" backgroundColor="rgb(248, 220, 220)" :strokeWidth="10" :width="100" :percentage="30"></x-progress>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="loading-demo">
      <h2>loading</h2>
      <div class="loading-basic">
        <x-button @click="handleLoadingShow1">自定义loading</x-button>
        <x-loading v-show="loadingShow" text="马不停蹄加载中..."></x-loading>
      </div>
      <br>
      <div class="loading-function">
        <x-button @click="handleLoadingShow2">方法调用</x-button>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="alert-demo">
      <h2>alert</h2>
      <div class="alert-basic">
        <x-alert :show.sync="alertShow1" closable type="success" message="Success Text" description="Success Description Success Description Success Description" icon="setting"></x-alert>
      </div>
      <br>
      <div class="alert-type">
        <x-alert type="info" message="Info Text" closable :show.sync="alertShow2"></x-alert>
        <br />
        <x-alert type="error" message="Error Text" icon="close-circle-fill"></x-alert>
        <br />
        <x-alert type="warning" message="Warning Text" closable closeText="close" :show.sync="alertShow3"></x-alert>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="toast-demo">
      <h2>toast</h2>
      <div class="toast-basic">
        <x-space>
          <x-button @click="toastShow1">默认toast</x-button>
          <x-button @click="toastShow2">自动关闭toast</x-button>
        </x-space>
      </div>
      <div class="toast-position">
        <x-space>
          <x-button @click="toastShow3">上toast</x-button>
          <x-button @click="toastShow4">左toast</x-button>
          <x-button @click="toastShow5">下toast</x-button>
          <x-button @click="toastShow6">右toast</x-button>
        </x-space>
      </div>
      <div class="toast-type">
        <x-space>
          <x-button @click="toastShow7" status="success">success</x-button>
          <x-button @click="toastShow8" status="info">info</x-button>
          <x-button @click="toastShow9" status="warning">warning</x-button>
          <x-button @click="toastShow10" status="danger">danger</x-button>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="popover-demo">
      <h2>popover</h2>
      <div class="popover-basic">
        <x-space>
          <x-popover>
            <template v-slot:content="{close}">popover <x-button @click="close">close</x-button></template>
            <x-button type="primary">click激活</x-button>
          </x-popover>
          <x-popover trigger="hover">
            <template slot="content">popover</template>
            <x-button type="primary">hover激活</x-button>
          </x-popover>
          <x-popover trigger="focus">
            <template slot="content">popover</template>
            <x-button type="primary">focus激活</x-button>
          </x-popover>
        </x-space>
      </div>
      <div class="popover-position">
        <x-space>
          <x-popover trigger="hover" position="top">
            <template slot="content">popover</template>
            <x-button>上</x-button>
          </x-popover>
          <x-popover trigger="hover" position="bottom">
            <template slot="content">popover</template>
            <x-button>下</x-button>
          </x-popover>
          <x-popover trigger="hover" position="left">
            <template slot="content">popover</template>
            <x-button>左</x-button>
          </x-popover>
          <x-popover trigger="hover" position="right">
            <template slot="content">popover</template>
            <x-button>右</x-button>
          </x-popover>
        </x-space>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="collapse-demo">
      <h2>collapse</h2>
      <div class="collapse-basic">
        <x-collapse :selected.sync="selectedCollapse1">
          <x-collapse-item title="标题1" name="1">内容一</x-collapse-item>
          <x-collapse-item title="标题2" name="2">内容二</x-collapse-item>
          <x-collapse-item title="标题3" name="3">内容三</x-collapse-item>
        </x-collapse>
      </div>
      <br>
      <div class="collapse-single">
        <x-collapse single :selected.sync="selectedCollapse2">
          <x-collapse-item title="标题1" name="1">内容一</x-collapse-item>
          <x-collapse-item title="标题2" name="2">内容二</x-collapse-item>
          <x-collapse-item title="标题3" name="3">内容三</x-collapse-item>
        </x-collapse>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="spread-demo">
      <h2>spread</h2>
      <div class="spread-basic">
        <x-button @click="spreadShow = !spreadShow">Click Me</x-button>
        <x-spread>
          <div class="spread" v-if="spreadShow"></div>
        </x-spread>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="modal-demo">
      <h2>modal</h2>
      <div class="modal-basic">
        <x-button @click="handleModalOpen1">打开Modal</x-button>
        <x-modal :show="modalShow1" title="这是标题" :confirm="onConfirm1" :cancel="onCancel1" @close="onClose1">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </x-modal>
      </div>
      <br>
      <div class="modal-size">
        <x-space>
          <x-button @click="handleModalOpen2('xs')">xs</x-button>
          <x-button @click="handleModalOpen2('sm')">sm</x-button>
          <x-button @click="handleModalOpen2('md')">md</x-button>
          <x-button @click="handleModalOpen2('lg')">lg</x-button>
        </x-space>
        <x-modal :show="modalShow2" title="提示" :confirm="onConfirm2" :cancel="onCancel2" @close="onClose2" :size="size">
          <div :style="{'display':'flex','algin-items':'center','padding':'12px 0px'}">
            <x-icon icon="warning-circle-fill" color="#e6a23c" :style="{'margin-right':'8px'}"></x-icon>
            <span>此操作将永久删除该文件, 是否继续?</span>
          </div>
        </x-modal>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="drawer-demo">
      <h2>drawer</h2>
      <div class="drawer-basic">
        <x-space>
          <x-button @click="handleDrawerOpen1">从左向右打开Drawer</x-button>
          <x-button @click="handleDrawerOpen2">从右向左打开Drawer</x-button>
          <x-button @click="handleDrawerOpen3">从上到下打开Drawer</x-button>
          <x-button @click="handleDrawerOpen4">从下到上打开Drawer</x-button>
        </x-space>
        <x-drawer :direction="direction" :show="drawerShow" title="这是标题" :confirm="onConfirm3" :cancel="onCancel3" @close="onClose3">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </x-drawer>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="infiniteScroll-demo">
      <h2>infiniteScroll</h2>
      <div class="infiniteScroll-basic">
        <div class="infinite-list-wrapper">
          <ul class="list" v-infinite-scroll="infiniteScrollLoad1" :infinite-scroll-disabled="false" :infinite-scroll-delay="200" :infinite-scroll-distance="20" :infinite-scroll-immediate="true">
            <li class="list-item" v-for="i in count1" :key="i">{{i}}</li>
          </ul>
        </div>
      </div>
      <br>
      <div class="infiniteScroll-limit">
        <div class="infinite-list-wrapper">
          <ul class="list" v-infinite-scroll="infiniteScrollLoad2" infinite-scroll-disabled="disabled">
            <li class="list-item" v-for="i in count2" :key="i">{{i}}</li>
          </ul>
          <p v-if="infiniteScrollLoading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="lazy-demo">
      <h2>lazy</h2>
      <div class="lazy-basic">
        <div v-for="(item,index) in imgList" :key="index">
          <img style="width: 200px; height: 200px;" v-lazy="item">
        </div>
      </div>
      <x-divider></x-divider>
    </div>

    <div class="goTopBottom-demo">
      <h2>goTopBottom</h2>
      <div class="goTopBottom-basic">
        <div class="wrapper">
          <div class="wrapper-content">
            <template>
              <x-go-top-bottom target=".wrapper" :bottom="50"></x-go-top-bottom>
            </template>
            <p v-for="i in 100" :key="i">content{{i}}</p>
          </div>
        </div>
      </div>
      <x-divider></x-divider>
    </div>

  </div>
</template>
<script>
export default {
  mounted () {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 5000);
  },

  data () {
    return {
      inputValue1: '',
      inputValue2: 'lanyu',
      inputValue3: '',
      inputValue4: '',
      inputValue5: '',

      textareaValue1: "",
      textareaValue2: "hello",
      textareaValue3: "hello",
      textareaValue4: "",

      selectOptions1: [
        { label: "中国", value: "zhongguo" },
        { label: "俄罗斯", value: "eluosi" },
        { label: "美国", value: "meiguo" },
        { label: "澳大利亚", value: "aodaliya" },
        { label: "巴基斯坦", value: "bajisitan" },
      ],
      selectValue1: '',
      selectOptions2: [
        { label: "中国", value: "zhongguo" },
        { label: "俄罗斯", value: "eluosi" },
        { label: "美国", value: "meiguo" },
        { label: "澳大利亚", value: "aodaliya" },
        { label: "巴基斯坦", value: "bajisitan" },
      ],
      selectValue2: 'zhongguo',
      selectOptions3: [
        { label: "中国", value: "zhongguo" },
        { label: "俄罗斯", value: "eluosi", disabled: true },
        { label: "美国", value: "meiguo" },
        { label: "澳大利亚", value: "aodaliya", disabled: true },
        { label: "巴基斯坦", value: "bajisitan" },
      ],
      selectValue3: '',
      selectOptions4: [
        { cityName: "北京", cityCode: "131" },
        { cityName: "天津", cityCode: "332" },
        { cityName: "上海", cityCode: "289", disabled: true },
        { cityName: "重庆", cityCode: "132" },
        { cityName: "深圳", cityCode: "340" },
      ],
      selectValue4: '132',
      selectOptions5: [
        { label: "HTML", value: "HTML", disabled: true },
        { label: "CSS", value: "CSS" },
        { label: "Javascript", value: "Javascript" },
        { label: "Npm", value: "Npm" },
        { label: "Webpack", value: "Webpack" },
        { label: "Node", value: "Node" },
        { label: "Java", value: "Java" },
        { label: "XML", value: "XML" },
        { label: "xqh-vue-ui", value: "xqh-vue-ui" },
      ],
      selectValue5: '',
      selectOptions6: [
        { label: "HTML", value: "HTML" },
        { label: "CSS", value: "CSS" },
        { label: "Javascript", value: "Javascript" },
        { label: "Npm", value: "Npm" },
        { label: "Webpack", value: "Webpack" },
        { label: "Node", value: "Node" },
        { label: "Java", value: "Java" },
        { label: "XML", value: "XML" },
        { label: "xqh-vue-ui", value: "xqh-vue-ui" },
      ],
      selectValue6: ['HTML', 'CSS', 'Node'],

      radioValue1: '1',
      radioValue2: '2',
      radioValue3: '2',

      checkValue1: true,
      checkValue2: true,
      checkedList: ['北京', '杭州'],

      switchValue1: true,
      switchValue2: false,
      switchValue3: true,

      inputNumberValue1: 1,
      inputNumberValue2: 1,
      inputNumberValue3: 5,
      inputNumberValue4: 9,
      inputNumberValue5: 1,

      rateValue1: 2,
      rateValue2: 3,
      rateValue3: 5.5,

      datePickerValue: new Date(),

      fileList: [
        {
          name: 'avatar1.jpg',
          url: '1.jpg'
        },
        {
          name: 'avatar2.jpg',
          url: '2.jpg'
        }
      ],

      // columns1: [
      //   {
      //     title: 'Name',
      //     key: 'name'
      //   },
      //   {
      //     title: 'Age',
      //     key: 'age'
      //   },
      //   {
      //     title: 'Address',
      //     key: 'address'
      //   }
      // ],
      // tableData1: [
      //   {
      //     name: 'John Brown',
      //     age: 18,
      //     address: 'New York No. 1 Lake Park',
      //     date: '2016-10-03'
      //   },
      //   {
      //     name: 'Joe Black',
      //     age: 30,
      //     address: 'Sydney No. 1 Lake Park',
      //     date: '2016-10-02'
      //   },
      //   {
      //     name: 'Jim Green',
      //     age: 24,
      //     address: 'London No. 1 Lake Park',
      //     date: '2016-10-01'
      //   },
      //   {
      //     name: 'Jon Snow',
      //     age: 26,
      //     address: 'Ottawa No. 2 Lake Park',
      //     date: '2016-10-04'
      //   }
      // ],
      // columns2: [
      //   {
      //     type: 'selection',
      //     width: 60
      //   },
      //   {
      //     title: "Name",
      //     key: "name",
      //     slot: 'name'
      //   },
      //   {
      //     title: "Age",
      //     key: "age",
      //     sortable: 'normal', // iview  默认排序 排序方法 custom（远程排序）
      //     sortType: 'asc',
      //   },
      //   {
      //     title: "Address",
      //     key: "address"
      //   },
      //   {
      //     title: 'operator',
      //     key: "operator",
      //     slot: 'action',
      //   }
      // ],
      // tableData2: [
      //   {
      //     name: "John Brown",
      //     age: 18,
      //     address: "New York No. 1 Lake Park",
      //     date: "2016-10-03"
      //   },
      //   {
      //     name: "Joe Black",
      //     age: 30,
      //     address: "Sydney No. 1 Lake Park",
      //     date: "2016-10-02"
      //   },
      //   {
      //     name: "Jim Green",
      //     age: 24,
      //     address: "London No. 1 Lake Park",
      //     date: "2016-10-01"
      //   },
      //   {
      //     name: "Jon Snow",
      //     age: 26,
      //     address: "Ottawa No. 2 Lake Park",
      //     date: "2016-10-04"
      //   }
      // ],

      tableOptions1: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
        ],
        datas: [
          { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
          { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
          { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
          { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' },
        ]
      },
      tableOptions2: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
        ],
        datas: [
          { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
          { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
          { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
          { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' },
        ]
      },
      tableOptions3: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
        ],
        datas: [
          { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
          { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
          { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
          { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' },
        ]
      },
      headStyle: {
        color: "#fff",
        borderColor: "#4c94d1",
        backgroundColor: "rgba(25,66,120,.9)",
      },
      rowStyle: {
        borderColor: "#4c94d1",
      },
      tableOptions4: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
          { field: 'action', title: '操作', align: 'center' },
        ],
        datas: [
          { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
          { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
          { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
          { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' },
        ]
      },

      listData1: [
        'God finds himself by creating.',
        'The dry river-bed finds no thanks for its past.',
        'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
      ],
      listData2: [
        'God finds himself by creating.',
        'The dry river-bed finds no thanks for its past.',
        'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
      ],

      tagData: [
        {
          text: 'tag1',
          type: 'success',
          size: 'lg'
        },
        {
          text: 'tag2',
          type: 'info',
          size: 'md'
        },
        {
          text: 'tag3',
          type: 'warning',
          size: 'sm'
        },
        {
          text: 'tag4',
          type: 'danger',
          size: 'xs'
        },
      ],

      currentDate: new Date().toLocaleString(),

      tabActive1: 'second',
      tabActive2: 'first',

      currentPage: 5,

      skeletonShow: false,
      skeletonType: 1,

      loadingShow: false,

      alertShow1: true,
      alertShow2: true,
      alertShow3: true,

      selectedCollapse1: ["1", "2"],
      selectedCollapse2: [],

      spreadShow: false,

      modalShow1: false,
      modalShow2: false,
      size: 'md',

      drawerShow: false,
      direction: 'ltr',

      count1: 0,
      count2: 18,
      infiniteScrollLoading: false,

      imgList: [
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0Z320111T2%2F200Z3111T2-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660484361&t=9323e4263ab4a52d5f39d8efcee07f93`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660484995&t=5a9e6edbfa16fd33f9071afa39c01cc1`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1115%2F092621094155%2F210926094155-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=834ea6971ee412f977b09ae10088a4b1`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp303733362.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=16eeae2cdf2696b30396bc9c7bb15315`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1111%2F0H11Q41J9%2F1PH1141J9-3.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=5c6a083d97b80831151ea38e135704ef`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0F220091522%2F200F2091522-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=5619fc2a66add12e430867a8da2084e8`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F0F420110430%2F200F4110430-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=f2b41951e2d1b66b99e10facd43f0316`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F091H00U329%2F20091FU329-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=5a2ff4625f806b2a4e4515e3e00dfbbd`,
        `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F052215104254%2F150522104254-7.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660486394&t=cfa7109792904501f6512d43ccb7a659`,
      ],
    }
  },
  computed: {
    noMore () {
      return this.count2 >= 20
    },
    disabled () {
      return this.infiniteScrollLoading || this.noMore
    }
  },
  methods: {
    handleClickIcon (e) {
      console.log(e)
    },

    handInputChange (e) {
      console.log(e)
    },

    handleTextareaInput (e) {
      console.log(e)
    },

    handleSelectChange (select, index) {
      console.log(select, index);
    },

    handleRadioChange (value) {
      console.log(value)
    },

    handleCheckChange (value) {
      console.log(value)
    },

    handleSwitchChange (value) {
      console.log(value)
    },

    handleInputNumberChange (value) {
      console.log(value)
    },

    handleChange (file) {
      console.log('当前选择了文件', file)
    },
    handleExceed (files, fileList) {
      console.log('您已经超过文件上传个数限制了！')
    },
    handleBeforeUpload (file) {
      const limitSize = file.size / 1024 < 500; // 500Kb限制
      if (!limitSize) {
        console.log('上传图片大小不能超过 500kb!')
      }
      return limitSize;
    },
    handleProgress (ev) {
      console.log('上传中...', ev)
    },
    handleSuccess (res) {
      console.log('上传成功！', res)
    },
    handleError (err) {
      console.log('上传失败,', err)
    },

    handleDelete (index) {
      this.tableOptions4.datas.splice(index, 1)
    },

    handleTagClose (index) {
      this.tagData.splice(index, 1);
    },

    handleTabClick (e) {
      console.log(e)
    },

    handleShowSkeleton (type) {
      this.skeletonType = type;
      this.skeletonShow = true;
      setTimeout(() => {
        this.skeletonShow = false;
      }, 3000);
    },

    handleLoadingShow1 () {
      this.loadingShow = true
      setTimeout(() => {
        this.loadingShow = false
      }, 2000)
    },
    handleLoadingShow2 () {
      this.$xShowLoading({
        text: 'Loading...',
        opacity: 0.6,
        curtainColor: 'lightgrey',
        textColor: 'white',
        textFontSize: 20,
        iconColor: 'white',
        iconName: 'sync',
        iconSize: 30
      })
      setTimeout(() => {
        this.$xHideLoading()
      }, 2000)
    },

    toastShow1 () {
      this.$xToast('message1')
    },
    toastShow2 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        autoClose: 3
      })
    },
    toastShow3 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'top',
      })
    },
    toastShow4 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'left',
      })
    },
    toastShow5 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'bottom',
      })
    },
    toastShow6 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'right',
      })
    },
    toastShow7 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        type: 'success',
      })
    },
    toastShow8 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        type: 'info',
      })
    },
    toastShow9 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        type: 'warning',
      })
    },
    toastShow10 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        type: 'danger',
      })
    },

    handleModalOpen1 () {
      this.modalShow1 = true;
    },
    onConfirm1 () {
      console.log('confirm')
    },
    onCancel1 () {
      console.log('cancel')
    },
    onClose1 () {
      this.modalShow1 = false
    },
    handleModalOpen2 (size) {
      this.modalShow2 = true
      this.size = size
    },
    onConfirm2 () {
      console.log('confirm')
    },
    onCancel2 () {
      console.log('cancel')
    },
    onClose2 () {
      this.modalShow2 = false
    },

    handleDrawerOpen1 () {
      this.direction = 'ltr'
      this.drawerShow = true
    },
    handleDrawerOpen2 () {
      this.direction = 'rtl'
      this.drawerShow = true
    },
    handleDrawerOpen3 () {
      this.direction = 'ttb'
      this.drawerShow = true
    },
    handleDrawerOpen4 () {
      this.direction = 'btt'
      this.drawerShow = true
    },
    onConfirm3 () {
      console.log('confirm')
    },
    onCancel3 () {
      console.log('cancel')
    },
    onClose3 () {
      this.drawerShow = false
    },

    infiniteScrollLoad1 () {
      this.count1 += 2
    },
    infiniteScrollLoad2 () {
      this.infiniteScrollLoading = true
      setTimeout(() => {
        this.count2 += 2
        this.infiniteScrollLoading = false
      }, 2000)
    },
  }
}
</script>
<style lang="scss" scoped >
.grid-content {
  border-radius: 4px;
  height: 36px;
  color: white;
  text-align: center;
  line-height: 36px;
  &-1 {
    height: 36px;
    line-height: 36px;
  }
  &-2 {
    height: 60px;
    line-height: 60px;
  }
  &-3 {
    height: 40px;
    line-height: 40px;
  }
}
.bg-grey-dark {
  background: #99a9bf;
}
.bg-grey-light {
  background: #d3dce6;
}

.x-header,
.x-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.x-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.x-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.icon-collection {
  .card {
    display: inline-flex;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    flex-direction: column;
    padding: 16px;
    margin: 0 10px 14px 0;
  }
}

.card-img {
  .x-card {
    width: 300px;
    img {
      width: 100%;
      display: block;
    }
    .text {
      position: relative;
      padding: 14px;
      .time {
        font-size: 13px;
        color: #999;
      }
      .button {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #409eff;
      }
    }
  }
}

.x-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}
.x-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.x-carousel-item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.spread {
  margin: 10px auto;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: #d3dce6;
}

.infinite-list-wrapper {
  overflow-y: scroll;
  border: 1px solid #ddd;
  height: 300px;
  text-align: center;
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #d3dce6;
      margin: 10px;
      color: #fff;
      & + .list-item {
        margin-top: 10px;
      }
    }
  }
}

.goTopBottom-basic {
  .wrapper {
    height: 700px;
    overflow: auto;
    background-color: #d3dce6;
    .wrapper-content {
      height: 2000px;
      text-align: center;
    }
  }
}
</style>
