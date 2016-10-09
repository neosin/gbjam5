"use strict";

(function() {
	GBGJ.EnemyShooter = GBGJ.BaseEnemyEntity.extend({
		init: function(x, y, settings) {
			settings = settings || {};
			settings.image = 'enemy1';
			settings.shapes = [ new me.Rect( 0, 0, 24, 18) ];
			settings.speed = GBGJ.Constant.speed.medium;
			this._super(GBGJ.BaseEnemyEntity, 'init', [x, y, settings]);
		},
	});
})();