const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app/canvas.jpeg","app/edit.jpeg","app/editor2.jpeg","app/exp.jpeg","app/magic.jpeg","app/player.jpeg","app/presentation.jpeg","demo_slides_data/circles.json","demo_slides_data/slide0.js","demo_slides_data/three_points_and_a_pic.js","demo_slides_data/title01.js","demo_slides_data/venn_diagram.js","demo_slides_data/venn_diagram2.js","favicon.ico","favicon.png","images/1.6q2.png","images/8.1-q2-p-1.png","images/8.1-q2-p-2.png","images/8.1-q2-p-3.png","images/8.1-q2-p-5.png","images/activity1.jpg","images/antilog1.jpg","images/antilog2.jpg","images/antilog3.jpg","images/antilog4.jpg","images/atom.png","images/average speed.png","images/baloons.png","images/banners.png","images/black_board.jpg","images/board_classroom.jpg","images/car showing speed (1).png","images/car showing speed.png","images/carbon-atom.png","images/drops.png","images/ex4.1-q2_matrix_multiplication.png","images/female_teacher.jpg","images/getImagesDbList.js","images/helium-atom.png","images/hydrongen-atom.png","images/logtable1.jpg","images/logtable2.jpg","images/logtable3.jpg","images/logtable4.jpg","images/mad_scientist.jpg","images/moving car with arrows.jpg","images/multiplication_step-0.png","images/multiplication_step-01.png","images/multiplication_step-02.png","images/multiplication_step-03.png","images/multiplication_step-04.png","images/oxygen-atom.png","images/pattern_waves.png","images/people.png","images/solarsystem.jpg","images/taleem_classroom.jpg","images/teacher_facing_board.jpg","images/teen_boy.jpg","images/test.png","images/text2-4-8-6.png","images/theorem10.1.1.png","images/theorem10.1.2.png","images/wood.jpg","notes/best-practices-dockerizing-nodejs-express-api.html","notes/docker_basics.html","notes/index.html","notes/monogodb_docker_setup.html","notes/using_mongodb_with_dockers.html","response.md","responsive.html","sounds/music.opus","system_images/1920x1080.png","system_images/bg.png","system_images/chemistry_10thFBSIE.png","system_images/chemistry_9thFBSIE.png","system_images/fbise10math.png","system_images/fbise9math.png","system_images/fbise9mathOld.png","system_images/female.png","system_images/female2.png","system_images/graph.png","system_images/male.png","system_images/math.png","system_images/math_10thFBSIE.png","system_images/math_8thFBSIE.png","system_images/math_9thFBSIE.png","system_images/physics_10thFBSIE.png","system_images/physics_9thFBSIE.png","system_images/potrate.jpg","system_images/theorem10.1.2.png","system_images/urdu_10thFBSIE.png","system_images/urdu_8thFBSIE.png","system_images/urdu_9thFBSIE.png","thunbnails_slides/atom.png","thunbnails_slides/baloons.png","thunbnails_slides/banners.png","thunbnails_slides/carbon-atom.png","thunbnails_slides/circles.png","thunbnails_slides/drops.png","thunbnails_slides/presentationZero.png","thunbnails_slides/slide0.png","thunbnails_slides/teen_boy.jpg","thunbnails_slides/three_points_and_a_pic.png","thunbnails_slides/title01.png","thunbnails_slides/venn_diagram.png","thunbnails_slides/venn_diagram2.png","thunbnails_slides/wood.jpg"]),
	mimeTypes: {".jpeg":"image/jpeg",".json":"application/json",".js":"text/javascript",".png":"image/png",".jpg":"image/jpeg",".html":"text/html",".md":"text/markdown",".opus":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DSEFKHuR.js","app":"_app/immutable/entry/app.DDxU_-Ib.js","imports":["_app/immutable/entry/start.DSEFKHuR.js","_app/immutable/chunks/entry.CBZCCnOP.js","_app/immutable/chunks/scheduler.Cr089OC2.js","_app/immutable/chunks/index.BUabgXgx.js","_app/immutable/entry/app.DDxU_-Ib.js","_app/immutable/chunks/scheduler.Cr089OC2.js","_app/immutable/chunks/index.BDtNs7vA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-AMqdQhMO.js')),
			__memo(() => import('./chunks/1-BzNnj7Tm.js')),
			__memo(() => import('./chunks/2-D_vfEXKc.js')),
			__memo(() => import('./chunks/3-DsCYkSXc.js')),
			__memo(() => import('./chunks/4-3ZEIm7pS.js')),
			__memo(() => import('./chunks/5-vAnN5HTQ.js')),
			__memo(() => import('./chunks/6-CLV8NPGP.js')),
			__memo(() => import('./chunks/7-88P_o0wu.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/canvas_slides_index",
				pattern: /^\/canvas_slides_index\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/canvas_slides",
				pattern: /^\/canvas_slides\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/editor",
				pattern: /^\/editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/syllabus",
				pattern: /^\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
