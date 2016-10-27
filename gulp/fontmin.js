'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import fontmin from 'gulp-fontmin';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // move font files
  gulp.task('fontmin', () => {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.{ttf}'))
      .pipe(plugins.changed(dest))
      .pipe(gulpif(args.production, plugins.fontmin()))
      .pipe(gulp.dest(dest));
  });
}
