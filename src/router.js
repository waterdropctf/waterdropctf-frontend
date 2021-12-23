import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import EventItem from "@/components/event/EventItem";
import Challenge from "@/components/challenge/Challenge";
import Init from "@/components/init/Init";
import Compose from "@/components/compose/Compose";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/init',
            name: 'Init',
            component: Init
        },
        {
            path: '/challenge',
            name: 'Challenge',
            component: Challenge
        },
        // {
        //     path: '/event',
        //     name: 'Event',
        //     component: Event
        // },
        {
            path: '/event/:eventId',
            name: 'EventItem',
            component: EventItem
        },
        // {
        //     path: '/categories',
        //     name: 'Categories Manage',
        //     component: Categories
        // },
        // {
        //     path: '/types',
        //     name: 'Types Manage',
        //     component: Types
        // },
        {
            path: '/compose',
            name: 'Compose Manage',
            component: Compose
        },
        // {
        //     path: '/instance',
        //     name: 'Instance Manage',
        //     component: Instance
        // },
        // {
        //     path: '/containers',
        //     name: 'Containers Manage',
        //     component: Containers
        // },
        // {
        //     path: '/users',
        //     name: 'Users Manage',
        //     component: Users
        // },
        // {
        //     path: '/answer',
        //     name: 'Answer',
        //     component: Answer
        // },
        // {
        //     path: '/attachments',
        //     name: 'Attachments Manage',
        //     component: Attachments
        // },
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: About
        // },
        // {
        //     path: '/writeup',
        //     name: 'Writeup',
        //     component: Writeup
        // },
        // {
        //     path: '/writeup/:challengeId',
        //     name: 'WriteupOfChallenge',
        //     component: WriteupOfChallenge
        // },
        // {
        //     path: '/skill_tree',
        //     name: 'SkillTree',
        //     component: SkillTree
        // },
        // {
        //     path: '/skill_tree/:skillTreeId',
        //     name: 'SkillTreeItem',
        //     component: SkillTreeItem
        // }
    ]
})
