
								 jQuery(document).ready(function () {

										jQuery("#nanogallery2").nanogallery2( {
												<!-- ### gallery settings ### -->
												thumbnailHeight:  150,
												thumbnailWidth:   150,
												itemsBaseURL:     'http://nanogallery2.nanostudio.org/samples/',
												
												<!-- ### gallery content ### -->
												items: [
														{ src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
														{ src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
														{ src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' }
													]
											});
									});
