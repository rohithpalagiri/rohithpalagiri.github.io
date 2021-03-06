var ExpandProject = (function(window, document) {

	var data = require('./workData');

	var headerComponents = {
		header: $('header.header')
	};

	var workComponents = {
		items: 			$$('.work__item'),
		bgs: 				$$('.work__item-bg'),
		tagline: 		$$('.work__item-tagline'),
		tag: 				$$('.work__item-tag'),
		activeItem: {},
		activeBg: 	{}
	};

	var detailComponents = {
		title: 				$('[data-work-title]'),
		client: 			$('[data-work-client]'),
		whatIDid: 		$('[data-work-what-i-did]'),
		tagline: 			$('[data-work-tagline]'),
		tag: 					$('[data-work-tag]'),
		description: 	$('[data-work-description]'),
		github: 			$('[data-work-github]'),
		live: 				$('[data-work-live]'),
		tech: 				$('[data-work-tech]'),
		process: 			$('[data-work-process]'),
		closeBtn: 		$$('.work-details-close'),
		container: 		$('.work-details')
	};

	/**
	 * Detect CSS transform support
	 */

	var transform = false,
	    transformString = 'transform',
	    domPrefixes = 'Webkit Moz ms'.split(' '),
	    pfx = '',
	    elem = document.createElement('div');

	if (elem.style[transformString] !== undefined) { transform = true; }

	if (transform === false) {
	  for (var i = 0; i < domPrefixes.length; i++) {
	    if (elem.style[domPrefixes[i] + 'Transform'] !== undefined) {
	      pfx = domPrefixes[i];
	      transformString = pfx + 'Transform';
	      transform = true;
	      break;
	    }
	  }
	}

	/**
	 * Detect transitionend event support
	 */

	var transitions = {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'otransitionend'
	  },
	  transitionendString,
	  elem = document.createElement('div');
	 
  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      transitionendString = transitions[t];
      break;
    }
  }

	function $(query) {
		return document.querySelector(query);
	}

	function $$(query) {
		return [].slice.call(document.querySelectorAll(query));
	}

	function init() {
		workComponents.items.forEach(function(item, index) {
			item.addEventListener('click', handleClick.bind(null, index));
		});

		detailComponents.closeBtn.forEach(function(button) {
			button.addEventListener('click', function() {
				window.history.back();
				resetTitleTag();
			});
		});

		window.addEventListener('popstate', function(event) {
		  close();
		  resetTitleTag();
		});
	}

	function resetTitleTag() {
		document.title = 'Rohith Palagiri | Front-End Developer';
	}

	function updateComponents(work) {
		detailComponents.title.innerHTML = data[work].title;
		detailComponents.client.innerHTML = data[work].client;
		detailComponents.whatIDid.innerHTML = data[work].whatIDid;
		detailComponents.tagline.innerHTML = data[work].tagline;
		detailComponents.tag.innerHTML = data[work].tag;
		detailComponents.description.innerHTML = data[work].description;
		detailComponents.github.href = data[work].github;
		detailComponents.live.href = data[work].live;
		detailComponents.process.innerHTML = data[work].process;

		var tech = data[work].tech.map(function(x) {
			return '<li class="c-list__item">' + x + '</li>';
		}).join('');

		detailComponents.tech.innerHTML = tech;
	}

	function handleClick(index) {
		window.requestAnimationFrame(animateStuff.bind(null, index));
	}

	function animateStuff(index) {
		workComponents.items[index].classList.add('active');
		workComponents.activeItem = workComponents.items[index];
		workComponents.activeBg = workComponents.bgs[index];
		workComponents.tagline[index].classList.add('hide');

		var banner = workComponents.activeItem.querySelector('span.date')
		var logo = workComponents.activeItem.querySelector('.company-logo');
		var location = workComponents.activeItem.querySelector('.work__item-location');
		var techStack = workComponents.activeItem.querySelector('.tech-stack');

		var name = workComponents.activeItem.getAttribute('data-work');
		

		window.history.pushState({
			title: name
		}, name, name);

		name = name.replace(/\_/g, ' ');
		document.title = 'Rohith Palagiri | ' + name[0].toUpperCase() + name.substr(1, name.length - 1);

		updateComponents(workComponents.activeItem.getAttribute('data-work'));
		transformBackground(workComponents.activeItem, workComponents.activeBg);

		detailComponents.container.classList.remove('theme-1', 'theme-2', 'theme-3', 'theme-4');
		detailComponents.container.classList.add('theme-' + parseInt(index+1));

		hideStuff(banner, logo, location, techStack)
		moveTitle(workComponents.activeItem.querySelector('.work__item-heading'));
		moveTag(workComponents.activeItem.querySelector('.work__item-tag'));
		toggleHeaderVisibility();
	}

	function transformBackground(item, bg) {
		var style = window.getComputedStyle(item, null);
		var background = style.getPropertyValue('background-color');
		detailComponents.container.style.backgroundColor = background;
		bg.style[transformString] = transformTile(bg);

		transitionEnd(bg, function() {
			detailComponents.container.classList.add('active');
			disableScroll();
		});
	}

	function toggleHeaderVisibility() {
		headerComponents.header.classList.toggle('hide');
	}

	function hideStuff(banner, logo, location, techStack) {
		banner.classList.add('d-none')
		logo.classList.add('d-none')
		location.classList.add('d-none')
		techStack.classList.add('d-none')
	}

	function moveTitle(el) {
		var target = detailComponents.title;
		var diff = calcLenthBetweenItems(target, el);

		el.classList.add("heading-active")

		var transform = 'translate(' + diff.x +'px, ' + diff.y + 'px)';
		el.style[transformString] = transform;
	}

	function moveTag(el) {
		var target = detailComponents.tag;
		var diff = calcLenthBetweenItems(target, el);

		var transform = 'translate(' + diff.x +'px, ' + diff.y + 'px)';
		el.style[transformString] = transform;
	}

	function calcLenthBetweenItems(a, b) {
		var aOffset = a.getBoundingClientRect();
		var bOffset = b.getBoundingClientRect();

		return {
			x: aOffset.left - bOffset.left,
			y: aOffset.top - bOffset.top
		};
	}

	function transformTile(el) {
		var ww = window.innerWidth;
		var wh = window.innerHeight;
		var wcx = ww / 2;
		var wcy = wh / 2;

		var scrollTop = window.pageYOffset;

		var sourceOffset = el.getBoundingClientRect();
		var sourceWidth = sourceOffset.width;
		var sourceHeight = sourceOffset.height;
		var sourceCX = sourceWidth / 2;
		var sourceCY = sourceHeight / 2;

		var translateX = Math.round(wcx - sourceOffset.left - sourceCX);
		var translateY = Math.round(0 + wcy - sourceOffset.top - sourceCY);
		var scaleX = ww / sourceWidth;
		var scaleY = wh / sourceHeight;

		var transformVal = 'translate(' + translateX + 'px,' + translateY + 'px) scale(' + scaleX + ',' + scaleY + ')';

		return transformVal;
	}

	function close() {
		window.requestAnimationFrame(closeStuff);
	}

	function closeStuff() {
		// window.history.back();
		var title = workComponents.activeItem.querySelector('.work__item-heading');
		var tagline = workComponents.activeItem.querySelector('.work__item-tagline');
		var tag = workComponents.activeItem.querySelector('.work__item-tag');

		var banner = workComponents.activeItem.querySelector('span.date')
		var logo = workComponents.activeItem.querySelector('.company-logo');
		var location = workComponents.activeItem.querySelector('.work__item-location');
		var techStack = workComponents.activeItem.querySelector('.tech-stack');

		detailComponents.container.classList.add('hide');

		transitionEnd(detailComponents.container, shrinkBg, 350);

		function shrinkBg() {
			workComponents.activeBg.removeAttribute('style');
			title.removeAttribute('style');
			title.classList.remove("heading-active")
			banner.classList.remove('d-none')
			logo.classList.remove('d-none')
			location.classList.remove('d-none')
			techStack.classList.remove('d-none')
			tag.removeAttribute('style');
			detailComponents.container.classList.remove('active', 'hide');
			toggleHeaderVisibility();
			enableScroll();

			transitionEnd(workComponents.activeBg, function() {
				workComponents.activeItem.classList.remove('active');
				workComponents.activeItem = {};
				workComponents.activeBg = {};
				tagline.classList.remove('hide');
				detailComponents.container.scrollTop = 0;
			});
		}
	}

	function transitionEnd(el, callback, delay) {
		var complete = function() {
			setTimeout(function() {
				callback();
			}, delay || 0);
			el.removeEventListener(transitionendString, complete);
		};

		el.addEventListener(transitionendString, complete);
	}

	function disableScroll() {
		document.body.style.overflow = 'hidden';
	}

	function enableScroll() {
		document.body.removeAttribute('style');
	}

	return {
		init: init
	};

}(window, document));

module.exports = ExpandProject;