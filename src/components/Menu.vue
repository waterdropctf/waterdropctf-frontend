<template>
  <div>
    <sidebar-menu
        :menu="menu"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
    />
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    is_admin: Boolean,
  },
  data() {
    return {
      collapsed: false,
      menuCommon: {
        'brand': {
          href: '/',
          title: 'WaterDrop CTF',
          icon: 'fas fa-tint'
        },
        'usage_header': {
          header: true,
          title: 'Usage'
        },
        'challenge': {
          href: '/challenge',
          title: 'Challenge',
          icon: 'fa fa-code',
        },
        'event': {
          href: '/event',
          title: 'Event',
          icon: 'fas fa-flag'
        },
        'scoreboard': {
          href: '/scoreboard',
          title: 'Scoreboard',
          icon: 'fa fa-chart-line'
        },
        'about': {
          href: '/about',
          title: 'About',
          icon: 'fas fa-info-circle'
        }
      },
      menuAdmin: {
        'admin_header': {
          header: true,
          title: 'Admin'
        },
        'attachments': {
          href: '/attachments',
          title: 'Attachments',
          icon: 'fa fa-download'
        },
        'categories': {
          href: '/categories',
          title: 'Categories',
          icon: 'fa fa-folder'
        },
        'types': {
          href: '/types',
          title: 'Types',
          icon: 'fa fa-cogs'
        },
        'compose': {
          href: '/compose',
          title: 'Compose',
          icon: 'fab fa-docker'
        },
        'instance': {
          href: '/instance',
          title: 'Instance',
          icon: 'fas fa-box-open'
        },
        'containers': {
          href: '/containers',
          title: 'Containers',
          icon: 'fab fa-docker'
        },
        'users': {
          href: '/users',
          title: 'Users',
          icon: 'fas fa-users'
        },
        'answer': {
          href: '/answer',
          title: 'Answer',
          icon: 'fas fa-check'
        },
        'writeup': {
          href: '/writeup',
          title: 'Writeup',
          icon: 'fas fa-file-alt'
        }
      },
    }
  },
  computed: {
    menu: function () {
      let menu = [
        this.menuCommon['brand'],
        this.menuCommon['usage_header'],
        this.menuCommon['challenge'],
        this.menuCommon['scoreboard'],
        this.menuCommon['event']
      ]
      if (this.is_admin) {
        menu.push(this.menuAdmin['admin_header'])
        menu.push(this.menuAdmin['attachments'])
        menu.push(this.menuAdmin['categories'])
        menu.push(this.menuAdmin['types'])
        menu.push(this.menuAdmin['compose'])
        menu.push(this.menuAdmin['instance'])
        menu.push(this.menuAdmin['containers'])
        menu.push(this.menuAdmin['users'])
        menu.push(this.menuAdmin['answer'])
        menu.push(this.menuAdmin['writeup'])
      } else {
        // for normal user
      }
      menu.push(this.menuCommon['about'])
      return menu
    }
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed
      this.$emit("onToggleCollapse", collapsed)
    },
    onItemClick(event, item) {
      switch (item.title) {
        case 'click to login':
          console.log('login')
          break
        case 'click to logout':
          console.log('logout')
          break
      }
    },
  },
}
</script>

<style scoped>

</style>
